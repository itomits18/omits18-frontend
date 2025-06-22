'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Landmark, QrCode } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PaymentSummaryProps {
  onSubmit: () => void;
  bundleType: 'Individu' | 'bundle' | string;
  jenjangKompetisiType: 'SD' | 'SMP' | 'SMA' | string;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentItem = ({
  item,
  quantity,
  price,
  className,
}: {
  item: string;
  quantity?: number | string;
  price: string;
  className?: string;
}) => (
  <div className={cn('grid grid-cols-6 gap-1 py-2 text-sm', className)}>
    {' '}
    <p className="col-span-3 truncate text-left text-gray-700">{item}</p>
    <p className="col-span-1 text-center text-gray-700">
      {quantity !== undefined ? quantity : ''}
    </p>
    <p className="col-span-2 text-right font-medium text-gray-800">{price}</p>
  </div>
);

export default function PaymentSummary({
  onSubmit,
  bundleType,
  jenjangKompetisiType,
  setPayment,
}: PaymentSummaryProps) {
  const [paymentMethod, setPaymentMethod] = useState<'QRIS' | 'VA'>('QRIS');
  let mainItemLabel = `OMITS - Individu (${jenjangKompetisiType})`;
  let basePrice = 0;
  let mainItemPrice = 0;
  let quantityForMainItem: number | string = 1;

  if (jenjangKompetisiType === 'SD') {
    basePrice = 65000;
  } else if (jenjangKompetisiType === 'SMP') {
    basePrice = 70000;
  } else if (jenjangKompetisiType === 'SMA') {
    basePrice = 75000;
  } else {
    basePrice = 65000;
  }

  mainItemPrice = basePrice;
  const diskonBundle = 25000;
  if (bundleType === 'bundle') {
    mainItemLabel = `OMITS - Team (Bundle 5 Org) - ${jenjangKompetisiType}`;
    mainItemPrice = basePrice * 5;
    quantityForMainItem = '1 Tim';
  }

  const priceAfterDiscount =
    bundleType === 'bundle' ? mainItemPrice - diskonBundle : mainItemPrice;

  let ppn = 0;
  const biayaAdmin = 400;
  let ppnLabel = 'PPN';
  if (paymentMethod === 'QRIS') {
    ppn = priceAfterDiscount * 0.007;
    ppnLabel = 'PPN (0.7%)';
  } else {
    ppn = 4000;
    ppnLabel = 'PPN';
  }

  useEffect(() => {
    setPayment(paymentMethod.toUpperCase());
  }, []);

  const subTotal = priceAfterDiscount + ppn + biayaAdmin;
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace('Rp', 'Rp');
  };

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex w-full items-start justify-center overflow-hidden rounded-lg">
        <Image
          src="/images/competition/omits/bg-payment-omits.png"
          alt="OMITS Header"
          width={320}
          height={160}
        />
      </div>
      <Typography
        variant="h3"
        weight="bold"
        font="CinzelDecorative"
        className="mb-6 text-center text-gray-800"
      >
        OMITS
      </Typography>
      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="space-y-3">
        <div
          onClick={() => {
            setPayment('QRIS');
            setPaymentMethod('QRIS');
          }}
          className={cn(
            'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all',
            paymentMethod === 'QRIS'
              ? 'border-green-200 ring-2 ring-green-300'
              : 'border-gray-200',
          )}
        >
          <QrCode className="h-6 w-6 text-gray-700" />
          <div className="flex-grow">
            <p className="font-semibold">QRIS Payments (Recommended)</p>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-green-300">
            {paymentMethod === 'QRIS' && (
              <div className="h-2.5 w-2.5 rounded-full bg-green-300"></div>
            )}
          </div>
        </div>

        <div
          onClick={() => {
            setPayment('VA');
            setPaymentMethod('VA');
          }}
          className={cn(
            'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all',
            paymentMethod === 'VA'
              ? 'border-green-200 ring-2 ring-green-300'
              : 'border-gray-200',
          )}
        >
          <Landmark className="h-6 w-6 text-gray-700" />
          <div className="flex-grow">
            <p className="font-semibold">Bank Virtual Account</p>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-green-300">
            {paymentMethod === 'VA' && (
              <div className="h-2.5 w-2.5 rounded-full bg-green-300"></div>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="font-Lora text-black-200 mb-1 grid grid-cols-6 gap-1 pb-2 text-xs font-semibold">
        <p className="col-span-3 text-left">Items</p>
        <p className="col-span-1 text-center">Jumlah</p>
        <p className="col-span-2 text-right">Harga</p>
      </div>
      <div className="font-Lora mb-2 text-sm text-gray-700">
        <PaymentItem
          item={mainItemLabel}
          quantity={quantityForMainItem}
          price={formatCurrency(mainItemPrice)}
        />
        {bundleType === 'bundle' && (
          <PaymentItem
            item="Diskon Bundle"
            price={`- ${formatCurrency(diskonBundle)}`}
          />
        )}
        <PaymentItem item={ppnLabel} price={formatCurrency(ppn)} />
        {biayaAdmin > 0 && (
          <PaymentItem item="Biaya Admin" price={formatCurrency(biayaAdmin)} />
        )}
      </div>
      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="flex justify-between">
        <p className="font-Lora text-black-200 font-semibold">Subtotal</p>
        <p className="font-Lora text-2xl font-bold text-green-400">
          {formatCurrency(subTotal)}
        </p>
      </div>

      <Button
        onClick={onSubmit}
        className="mt-6 w-full rounded-xl bg-green-300 py-3 text-lg font-bold text-white hover:bg-green-700"
      >
        Bayar
      </Button>
    </div>
  );
}
