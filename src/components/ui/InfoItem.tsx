import { CoffeesGetAllOutput } from 'src/types/coffee';

interface InfoItemProps {
  label: keyof CoffeesGetAllOutput[number];
  value?: string | number | null | undefined | Date;
}

export default function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className='flex justify-between gap-x-4 py-2'>
      <dt className={`capitalize text-coffee-100`}>{label}</dt>
      <dd className={`truncate ${value ? 'text-white' : 'text-gray-500'}`}>
        {value?.toString() || 'Unknown'}
      </dd>
    </div>
  );
}
