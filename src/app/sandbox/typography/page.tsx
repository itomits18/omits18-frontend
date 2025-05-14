import Typography from '@/components/Typography';
import { cn } from '@/lib/utils';

const fontVariants = ['Lora', 'OZWizard', 'Cinzel'] as const;

const fontWeights = ['regular', 'medium', 'bold'] as const; // lora
const CinzelWeights = ['regular', 'bold', 'black'] as const; // cinzel

const typographyVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  't',
  'p',
  'b',
  'bs',
  'c',
] as const;

export default function TypographyPage() {
  return (
    <section className="my-8 px-4 text-center">
      <Typography font="Cinzel" variant="h1">
        Typography Component
      </Typography>

      <table className="mx-auto mt-8 min-w-[80%] border-collapse overflow-hidden rounded-lg border border-[#E0E0E0]">
        <thead>
          <tr>
            <th className="text-white-500 border bg-red-500 px-4 py-2">
              Font Variant
            </th>
            <th className="text-white-500 border bg-red-500 px-4 py-2">
              Font Weight
            </th>
            <th className="text-white-500 border bg-red-500 px-4 py-2">
              Typography Variant
            </th>
            <th className="text-white-500 border bg-red-500 px-4 py-2">
              Sample
            </th>
          </tr>
        </thead>
        <tbody>
          {fontVariants.map((fontVariant) =>
            (fontVariant === 'Cinzel' ? CinzelWeights : fontWeights).map(
              (fontWeight) =>
                typographyVariants.map((typographyVariant) => (
                  <tr key={`${fontVariant}-${fontWeight}-${typographyVariant}`}>
                    <td
                      className={cn(
                        'border border-gray-300 px-4 py-2',
                        'font-' + fontWeight,
                      )}
                    >
                      {fontVariant}
                    </td>
                    <td
                      className={cn(
                        'border border-gray-300 px-4 py-2',
                        'font-' + fontWeight,
                      )}
                    >
                      {fontWeight}
                    </td>
                    <td
                      className={cn(
                        'border border-gray-300 px-4 py-2',
                        'font-' + fontWeight,
                      )}
                    >
                      {typographyVariant}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <Typography
                        as="p"
                        font={fontVariant}
                        weight={fontWeight}
                        variant={typographyVariant}
                      >
                        OMITS 18th
                      </Typography>
                    </td>
                  </tr>
                )),
            ),
          )}
        </tbody>
      </table>
    </section>
  );
}
