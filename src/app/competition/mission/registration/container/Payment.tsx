'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Landmark, QrCode } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface PaymentSummaryProps {
  onSubmit: () => void;
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
    {' '}
    {/* Menambah py-2 untuk spasi */}
    <p className="col-span-3 truncate text-left text-gray-700">{item}</p>
    {/* Kosongkan jika quantity tidak ada */}
    <p className="col-span-1 text-center text-gray-700">
      {quantity !== undefined ? quantity : ''}
    </p>
    <p className="col-span-2 text-right font-medium text-gray-800">{price}</p>
  </div>
);

export default function PaymentSummary({ onSubmit }: PaymentSummaryProps) {
  const [paymentMethod, setPaymentMethod] = useState<'qris' | 'va'>('qris');

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
        className="mb-6 text-center font-Cinzel text-gray-800"
      >
        MISSION
      </Typography>
      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="space-y-3">
        <div
          onClick={() => setPaymentMethod('qris')}
          className={cn(
            'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all',
            paymentMethod === 'qris'
              ? 'border-blue-500 ring-2 ring-blue-200'
              : 'border-gray-200',
          )}
        >
          <QrCode className="h-6 w-6 text-gray-700" />
          <div className="flex-grow">
            <p className="font-semibold">QRIS Payments (Recommended)</p>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500">
            {paymentMethod === 'qris' && (
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>

        <div
          onClick={() => setPaymentMethod('va')}
          className={cn(
            'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all',
            paymentMethod === 'va'
              ? 'border-blue-500 ring-2 ring-blue-200'
              : 'border-gray-200',
          )}
        >
          <Landmark className="h-6 w-6 text-gray-700" />
          <div className="flex-grow">
            <p className="font-semibold">Bank Virtual Account</p>
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-500">
            {paymentMethod === 'va' && (
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="mb-1 grid grid-cols-6 gap-1 pb-2 font-Lora text-xs font-semibold text-black-200">
        <p className="col-span-3 text-left">Items</p>
        <p className="col-span-1 text-center">Jumlah</p>
        <p className="col-span-2 text-right">Harga</p>
      </div>
      <div className="mb-2 font-Lora text-sm text-black-200">
        <PaymentItem item="MISSION - Team" quantity={1} price="Rp65.000" />
        <PaymentItem item="PPN 11%" price="Rp4.000" />
        <PaymentItem item="Biaya Admin" price="Rp500" />
      </div>
      <hr className="my-6 border-b border-dashed border-gray-300" />
      <div className="flex justify-between">
        <p className="font-Lora font-semibold text-black-200">Subtotal</p>
        <p className="font-Lora text-2xl font-bold text-blue-400">Rp69.500</p>
      </div>

      <Button
        onClick={onSubmit}
        className="mt-6 w-full rounded-xl bg-blue-400 py-3 text-lg font-bold text-white hover:bg-blue-700"
      >
        Bayar
      </Button>
    </div>
  );
}
