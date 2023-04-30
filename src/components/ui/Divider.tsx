import { VariantProps, cva } from 'cva';

const divider = cva(['z-30 border-t border-coffee-200'], {
  variants: {
    intent: {
      solid: [''],
      dashed: ['border-dashed'],
    },
  },
});

const Divider = ({ intent }: VariantProps<typeof divider>) => {
  return (
    <div className='z-30 w-full sm:block' aria-hidden='false'>
      <div className='py-5'>
        <div className={divider({ intent })} />
      </div>
    </div>
  );
};

export default Divider;
