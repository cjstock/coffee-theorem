import { Reorder } from 'framer-motion';
import { coffeeModel } from '../../../../prisma/zod/coffee';
import { z } from 'zod';
import { cva, VariantProps } from 'cva';

const beanCardBg = cva([], {
  variants: {
    intent: {
      Light: ['bg-coffee-100'],
      LightMedium: ['bg-coffee-200'],
      Medium: ['bg-coffee-300'],
      MediumDark: ['bg-coffee-300'],
      Dark: ['bg-coffee-400'],
      ExtraDark: ['bg-coffee-500'],
    },
  },
});
const beanCardTextColor = cva([], {
  variants: {
    intent: {
      Light: ['text-coffee-500'],
      LightMedium: ['text-coffee-500'],
      Medium: ['text-coffee-500'],
      MediumDark: ['text-coffee-500'],
      Dark: ['text-coffee-100'],
      ExtraDark: ['text-coffee-100'],
    },
  },
});
const beanCardTitleColor = cva([], {
  variants: {
    intent: {
      Light: ['text-matcha-500'],
      LightMedium: ['text-matcha-500'],
      Medium: ['text-matcha-100'],
      MediumDark: ['text-matcha-100'],
      Dark: ['text-matcha-100'],
      ExtraDark: ['text-matcha-100'],
    },
  },
});

interface Props extends VariantProps<typeof beanCardBg> {
  coffee: z.infer<typeof coffeeModel>;
}
const BeanCard = ({ coffee, intent }: Props) => {
  const bgColor = beanCardBg({ intent });
  const textColor = beanCardTextColor({ intent });
  const titleColor = beanCardTitleColor({ intent });

  return (
    <Reorder.Item
      value={coffee}
      key={coffee.id}
      drag={false}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, scale: 0 }}
      className={`flex w-80 flex-col rounded-lg ${bgColor} text-left transition-colors`}
    >
      <ul className='flex flex-1 flex-col p-8'>
        <h1 className={`mx-auto text-xl ${titleColor}`}>
          {`${coffee.origin}`}
        </h1>
        <dl className='mt-1 flex flex-grow flex-col'>
          <dt className={`${textColor} mt-3 text-sm`}>Process</dt>
          <dd className='mt-1'>
            <span className={`text-md font-medium ${textColor}`}>
              {coffee.process && coffee.process}
            </span>
          </dd>
        </dl>
      </ul>
    </Reorder.Item>
  );
};

export default BeanCard;
