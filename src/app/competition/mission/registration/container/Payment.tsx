'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Landmark, QrCode } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PaymentSummaryProps {
  onSubmit: () => void;
  setPayment: React.Dispatch<React.SetStateAction<string>>;
  loadingPayment: boolean;
}

const PaymentItem = ({
  item,
  quantity,
  price,
}: {
  item: string;
  quantity?: number | string;
  price: string;
}) => (
  <div className="grid grid-cols-6 gap-1 py-2 text-sm">
    <Typography
      variant="p"
      className="col-span-3 truncate text-left text-gray-700"
    >
      {item}
    </Typography>
    <Typography variant="p" className="col-span-1 text-center text-gray-700">
      {quantity !== undefined ? quantity : ''}
    </Typography>
    <Typography
      variant="p"
      weight="medium"
      className="col-span-2 text-right text-gray-800"
    >
      {price}
    </Typography>
  </div>
);

export default function PaymentSummary({
  onSubmit,
  setPayment,
  loadingPayment,
}: PaymentSummaryProps) {
  const [paymentMethod, setPaymentMethod] = useState<'QRIS' | 'VA'>('QRIS');
  const mainItemPrice = 150000;

  let biayaLayanan = 0;
  let biayaLayananLabel = 'Biaya Admin';

  if (paymentMethod === 'QRIS') {
    biayaLayanan = mainItemPrice * 0.02;
    biayaLayananLabel = 'Biaya Admin (2%)';
  } else {
    biayaLayanan = 4400;
    biayaLayananLabel = 'Biaya Admin';
  }

  const subTotal = mainItemPrice + biayaLayanan;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace('Rp', 'Rp ');
  };

  useEffect(() => {
    setPayment(paymentMethod.toUpperCase());
  }, [paymentMethod, setPayment]);

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex w-full items-start justify-center overflow-hidden rounded-lg">
        <Image
          src="/images/competition/mission/bg-payment-mission.png"
          alt="Mission Header"
          width={321}
          height={160}
        />
      </div>
      <Typography
        variant="h3"
        weight="bold"
        className="font-Cinzel mb-6 text-center text-gray-800"
      >
        MISSION
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
              ? 'border-blue-500 ring-2 ring-blue-200'
              : 'border-gray-200',
          )}
        >
          <QrCode className="h-6 w-6 text-gray-700" />
          <div className="flex-grow">
            <Typography variant="p" weight="semibold">
              QRIS Payments (Recommended)
            </Typography>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500">
            {paymentMethod === 'QRIS' && (
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
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
              ? 'border-blue-500 ring-2 ring-blue-200'
              : 'border-gray-200',
          )}
        >
          <Landmark className="h-6 w-6 text-gray-700" />
          <div className="flex-grow">
            <Typography variant="p" weight="semibold">
              Bank Virtual Account
            </Typography>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500">
            {paymentMethod === 'VA' && (
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="mb-1 grid grid-cols-6 gap-1 pb-2 text-xs">
        <Typography
          variant="p"
          weight="semibold"
          className="font-Lora text-black-200 col-span-3 text-left"
        >
          Items
        </Typography>
        <Typography
          variant="p"
          weight="semibold"
          className="font-Lora text-black-200 col-span-1 text-center"
        >
          Jumlah
        </Typography>
        <Typography
          variant="p"
          weight="semibold"
          className="font-Lora text-black-200 col-span-2 text-right"
        >
          Harga
        </Typography>
      </div>
      <div className="font-Lora text-black-200 mb-2 text-sm">
        <PaymentItem
          item="MISSION - Team"
          quantity={1}
          price={formatCurrency(mainItemPrice)}
        />
        <PaymentItem
          item={biayaLayananLabel}
          price={formatCurrency(biayaLayanan)}
        />
      </div>
      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="flex justify-between">
        <Typography
          variant="p"
          weight="semibold"
          className="font-Lora text-black-200"
        >
          Subtotal
        </Typography>
        <Typography
          variant="p"
          weight="bold"
          className="font-Lora text-2xl text-blue-400"
        >
          {formatCurrency(subTotal)}
        </Typography>
      </div>

      <Button
        onClick={onSubmit}
        className="mt-6 w-full rounded-xl bg-blue-400 py-3 text-lg font-bold text-white hover:bg-blue-700"
        disabled={loadingPayment}
      >
        {loadingPayment ? 'Melakukan pembayaran...' : 'Register dan bayar'}
      </Button>
    </div>
  );
}
