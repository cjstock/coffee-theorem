import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import Heading from "../components/pages/coffee-collection/Heading";
import Router from "next/router";
import Unauthorized from "../components/ui/Unauthorized";
import ButtonDropDown from "@ui/ButtonDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffeeBeans,
  faShop,
  faFireplace,
  faFarm,
  faMagnifyingGlass,
} from "@fortawesome/pro-solid-svg-icons";
import InfoGrid, { OnReorder } from "@ui/InfoGrid";
import InfoCard, { CardStyle } from "@ui/InfoCard";
import { useQueryClient } from "@tanstack/react-query";
import { cva } from "cva";
import { filtered } from "@utils/utils";
import { Producer, Roaster, Seller, TastingNote } from "@prisma/client";
import { CoffeesGetAllOutput } from "src/types/coffee";
import InfoItem from "@ui/InfoItem";

const Home: NextPage = () => {
  const session = useSession();
  const queryClient = useQueryClient();

  const [coffeeState, setCoffeeState] = useState<CoffeesGetAllOutput>([]);
  trpc.coffee.getAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
    enabled: session.status == "authenticated",
    onSuccess(data) {
      setCoffeeState(data);

      // populate the sellers, roasters, producers with only unique entries
      const sellers = new Set<Seller>();
      const roasters = new Set<Roaster>();
      const producers = new Set<Producer>();
      data.forEach((coffee) => {
        coffee.seller && sellers.add(coffee.seller);
        coffee.roaster && roasters.add(coffee.roaster);
        coffee.producer && producers.add(coffee.producer);
      });
      setSellerState(Array.from(sellers));
      setRoasterState(Array.from(roasters));
      setProducerState(Array.from(producers));

      data.forEach((coffee) =>
        queryClient.setQueryData(["coffee", coffee.id], coffee)
      );
    },
  });

  const [sellerState, setSellerState] = useState<Array<Seller>>([]);
  const [roasterState, setRoasterState] = useState<Array<Roaster>>([]);
  const [producerState, setProducerState] = useState<Array<Producer>>([]);

  const [tastingNotes, setTatingNotes] = useState<Array<TastingNote>>([]);
  trpc.tastingNotes.getAll.useQuery(undefined, {
    onSuccess(data) {
      setTatingNotes(data);
    },
    refetchOnWindowFocus: false,
  });

  const deleteCoffee = trpc.coffee.deleteCoffee.useMutation({
    onSuccess(data) {
      queryClient.invalidateQueries(["coffee.getAll"]);
      setCoffeeState((prev) => prev.filter((coffee) => coffee.id !== data.id));
    },
  });

  const tabs = ["Coffees", "Sellers", "Roasters", "Producers"];
  const [selectedTab, setSelectedTab] = useState("Coffees");

  const TabStyles = cva(
    ["text-sm rounded-md px-3 py-2 font-medium transition-all"],
    {
      variants: {
        intent: {
          selected: ["bg-matcha-300 text-coffee-500"],
          default: ["bg-coffee-400 text-coffee-100"],
        },
      },
    }
  );

  const tabNav = (
    <>
      <div className="md:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-coffee-300 bg-coffee-500 text-coffee-100 focus:border-coffee-300 focus:ring-coffee-300"
          defaultValue={"Coffees"}
          onChange={(e) => setSelectedTab(e.currentTarget.value)}
        >
          {tabs.map((tab) => (
            <option key={tab}>{tab}</option>
          ))}
        </select>
      </div>
      <div className="hidden md:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={TabStyles({
                intent: selectedTab === tab ? "selected" : "default",
              })}
              aria-current={tab == selectedTab ? "page" : undefined}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </>
  );

  const [searchText, setSearchText] = useState("");
  const rightSide = (
    <div className="mt-3 flex justify-between md:ml-4 md:mt-0">
      <ButtonDropDown />
      <label htmlFor="mobile-search-candidate" className="sr-only">
        Filter
      </label>
      <label htmlFor="desktop-search-candidate" className="sr-only">
        Filter
      </label>
      <div className="flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="h-5 w-5 text-matcha-200"
            />
          </div>
          <input
            type="text"
            name="mobile-search-candidate"
            id="mobile-search-candidate"
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value)}
            className="block w-full rounded rounded-l-md border-coffee-300 bg-coffee-500 pl-10 text-matcha-200 transition-colors focus:border-coffee-200 focus:ring-coffee-200 sm:hidden"
            placeholder="Filter"
          />
          <input
            type="text"
            name="desktop-search-candidate"
            id="desktop-search-candidate"
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value)}
            className="hidden w-full rounded rounded-l-md border-coffee-300 bg-coffee-500 pl-10 text-matcha-200 transition-colors focus:border-coffee-200 focus:ring-coffee-200 sm:block sm:text-sm"
            placeholder="Filter"
          />
        </div>
      </div>
    </div>
  );

  if (session.status == "unauthenticated") return <Unauthorized />;
  return (
    <>
      <Heading key={"heading"} leftSide={tabNav} rightSide={rightSide} />
      {selectedTab === "Coffees" && (
        <InfoGrid state={coffeeState} setState={() => setCoffeeState}>
          {filtered(coffeeState, searchText).map((coffee) => {
            return (
              <InfoCard
                id={coffee.id}
                title={coffee.origin}
                icon={
                  <FontAwesomeIcon
                    icon={faCoffeeBeans}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: `${coffee.roast}`,
                      }
                    )}`}
                  />
                }
                key={coffee.id}
                menuOptions={[
                  {
                    name: "Edit",
                    action: () => Router.push(`coffee/${coffee.id}`),
                  },
                  {
                    name: "Remove",
                    action: () => deleteCoffee.mutate({ coffeeId: coffee.id }),
                  },
                ]}
                tags={tastingNotes.filter(
                  (note) =>
                    coffee.coffeeTastingNotes.findIndex(
                      (coffeeNote) => coffeeNote.tastingNoteId === note.id
                    ) !== -1
                )}
              >
                <InfoItem label="process" value={coffee.process} />
                <InfoItem label="variety" value={coffee.variety} />
                <InfoItem label="altitude" value={coffee.altitude} />
                <InfoItem label="seller" value={coffee.seller?.name} />
                <InfoItem label="roaster" value={coffee.roaster?.name} />
                <InfoItem label="producer" value={coffee.producer?.name} />
              </InfoCard>
            );
          })}
        </InfoGrid>
      )}
      {selectedTab === "Sellers" && (
        <InfoGrid state={sellerState} setState={setSellerState as OnReorder}>
          {filtered(sellerState, searchText).map((seller) => {
            return (
              <InfoCard
                id={seller.id}
                title={seller.name}
                icon={
                  <FontAwesomeIcon
                    icon={faShop}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: "Light",
                      }
                    )}`}
                  />
                }
                key={seller.id}
                menuOptions={[
                  {
                    name: "Edit",
                    action: () => null,
                  },
                  {
                    name: "Remove",
                    action: () => null,
                  },
                ]}
              >
                <InfoItem label="url" value={seller.url} />
                <InfoItem label="location" value={seller.location} />
              </InfoCard>
            );
          })}
        </InfoGrid>
      )}
      {selectedTab === "Roasters" && (
        <InfoGrid state={roasterState} setState={setRoasterState as OnReorder}>
          {filtered(roasterState, searchText).map((roaster) => {
            return (
              <InfoCard
                id={roaster.id}
                title={roaster.name}
                icon={
                  <FontAwesomeIcon
                    icon={faFireplace}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: "Light",
                      }
                    )}`}
                  />
                }
                key={roaster.id}
                menuOptions={[
                  {
                    name: "Edit",
                    action: () => null,
                  },
                  {
                    name: "Remove",
                    action: () => null,
                  },
                ]}
              >
                <InfoItem label="url" value={roaster.url} />
                <InfoItem label="location" value={roaster.location} />
              </InfoCard>
            );
          })}
        </InfoGrid>
      )}
      {selectedTab === "Producers" && (
        <InfoGrid
          state={producerState}
          setState={setProducerState as OnReorder}
        >
          {filtered(producerState, searchText).map((producer) => {
            return (
              <InfoCard
                id={producer.id}
                title={producer.name}
                icon={
                  <FontAwesomeIcon
                    icon={faFarm}
                    className={`h-11 w-11 rounded border-2 border-matcha-500 bg-matcha-400/30 p-1 ${CardStyle(
                      {
                        iconStyle: "Light",
                      }
                    )}`}
                  />
                }
                key={producer.id}
                menuOptions={[
                  {
                    name: "Edit",
                    action: () => null,
                  },
                  {
                    name: "Remove",
                    action: () => null,
                  },
                ]}
              >
                <InfoItem label="url" value={producer.url} />
                <InfoItem label="location" value={producer.location} />
              </InfoCard>
            );
          })}
        </InfoGrid>
      )}
    </>
  );
};

export default Home;
