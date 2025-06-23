'use client';

import Typography from '@/components/Typography';
import FileUpload from '@/components/form/FileUpload';
import ImagePreview from '@/components/form/ImagePreview';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { detailPendaftar } from '@/contents/DataPendaftar';
import { ChevronLeft, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ModalConfirm from '../../(container)/ModalConfirm';
import { ImageStore } from '../../mission/[id]/page';

export default function page({ params }: {params: Promise<{id: string}> }) {
  const [terimaConfirm, setTerimaConfirm] = useState(false);
  const [tolakConfirm, setTolakConfirm] = useState(false);
  const [revisiConfirm, setRevisiConfirm] = useState(false);

  const [store, setStore] = useState<ImageStore>({
    proof_identitas: 'https://dummyimage.com/600x400/000/fff',
  });
  const [isEdit, setIsEdit] = useState(false);

  const DetailPendaftar = detailPendaftar.find((x) => x.id === id);

  const methods = useForm({
    mode: 'onTouched',
  });

  const onSubmit = () => {
    let _testsubmit = '';
    _testsubmit += 'hello world';
  };

  return (
    <>
      <section className="space-y-5">
        <section className="space-y-8 rounded-xl bg-[#FFFDF0] p-8">
          <div className="flex items-center space-x-4">
            <Link href={'/admin/omits'}>
              <div className="w-fit cursor-pointer rounded-full bg-green-300 p-3 transition-all duration-200 hover:bg-green-400">
                <ChevronLeft size={20} className="text-neutral-main" />
              </div>
            </Link>

            <Typography variant="t" weight="medium">
              Kembali
            </Typography>
          </div>

          <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:space-y-4 md:space-y-0">
            <Typography
              variant="h4"
              weight="semibold"
              className="font-semibold text-green-500 max-md:text-3xl max-[350px]:text-2xl md:w-[50%]"
            >
              Detail Pendaftar
            </Typography>

            <div className="flex flex-col justify-end gap-2 max-[350px]:w-full">
              <Button
                asChild
                variant="green"
                size="md"
                className="border-2 border-green-200 bg-transparent text-green-200 hover:bg-green-50"
              >
                <Link
                  href={
                    'https://wa.me/+62' +
                    DetailPendaftar?.peserta.phone_number.slice(1)
                  }
                >
                  <Phone size={32} className="h-8 w-8" />
                  <span className="font-semibold">Contact Pendaftar</span>
                </Link>
              </Button>

              <div className="flex items-center justify-center gap-2 max-[350px]:grid max-[350px]:grid-cols-2">
                <Button
                  variant={'green'}
                  size="md"
                  onClick={() => setTerimaConfirm(true)}
                >
                  Terima
                </Button>
                <Button
                  variant={'brown'}
                  size="md"
                  onClick={() => setTolakConfirm(true)}
                >
                  Tolak
                </Button>
                <Button
                  variant={isEdit ? 'blue' : 'yellow'}
                  size="md"
                  className="max-[350px]:col-span-2"
                  onClick={() => {
                    if (isEdit) {
                      setRevisiConfirm(true);
                    }
                    setIsEdit((pre) => !pre);
                  }}
                >
                  {isEdit ? 'Simpan' : 'Revisi'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="gap-4 space-y-8 rounded-xl bg-[#FFFDF0] p-8">
          <div className="w-full rounded-lg bg-green-300 p-3 text-center">
            <Typography
              variant="t"
              weight="semibold"
              className="text-neutral-main"
            >
              Informasi Pendaftar
            </Typography>
          </div>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-1 gap-4 gap-x-8 md:grid-cols-2"
            >
              <Input
                labelTextClassname="text-black-300"
                id="jenjang"
                label="Jenjang"
                defaultValue={DetailPendaftar?.jenjang}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="region"
                label="Region"
                defaultValue={DetailPendaftar?.region}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="nama_sekolah"
                label="Nama Sekolah"
                defaultValue={DetailPendaftar?.nama_sekolah}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="alamat_sekolah"
                label="Alamat Sekolah"
                defaultValue={DetailPendaftar?.alamat_sekolah}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="provinsi"
                label="Provinsi"
                defaultValue={DetailPendaftar?.provinsi}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="kota"
                label="Kota/Kabupaten"
                defaultValue={DetailPendaftar?.kota}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
            </form>
          </FormProvider>
        </section>

        <section className="gap-4 space-y-8 rounded-xl bg-[#FFFDF0] p-8">
          <div className="w-full rounded-lg bg-green-300 p-3 text-center">
            <Typography
              variant="t"
              weight="semibold"
              className="text-neutral-main"
            >
              Data Peserta
            </Typography>
          </div>

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-1 gap-4 gap-x-8 md:grid-cols-2"
            >
              <Input
                labelTextClassname="text-black-300"
                id="fullname"
                label="Nama Lengkap"
                defaultValue={DetailPendaftar?.peserta.fullname}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="identitas"
                label="Nomor Identitas"
                defaultValue={DetailPendaftar?.peserta.identitas}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="phone_number"
                label="Nomor Telpon Peserta"
                defaultValue={DetailPendaftar?.peserta.phone_number}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />
              <Input
                labelTextClassname="text-black-300"
                id="wali_phone_number"
                label="Nomor Telpon Wali Peserta"
                defaultValue={DetailPendaftar?.peserta.wali_phone_number}
                placeholder="Text placeholder"
                disabled={!isEdit}
              />

              {store.proof_identitas ? (
                <div className="col-span-2 max-md:col-span-1">
                  <ImagePreview
                    id="proof_identitas"
                    name="Bukti Identitas"
                    link={store.proof_identitas}
                    label="Bukti Kartu Identitas"
                    readOnly={isEdit}
                    deleteFile={setStore}
                  />
                </div>
              ) : (
                <div className="col-span-2 max-md:col-span-1">
                  <FileUpload
                    id="document"
                    label="Bukti Identitas"
                    supportFiles={['png', 'jpeg', 'jpg', 'pdf']}
                    isRequired={false}
                    labelTextClassName="text-black-300"
                    // onStatusChange={(status, fileName) => {
                    //   console.log(`Status: ${status}, File: ${fileName}`);
                    // }}
                  />
                </div>
              )}
            </form>
          </FormProvider>
        </section>
      </section>

      <ModalConfirm
        open={terimaConfirm}
        setOpen={setTerimaConfirm}
        Description={
          <Typography variant="p" weight="medium" className="text-center">
            Apakah kamu yakin ingin terima peserta{' '}
            <span className="font-bold text-additions-brown-100">
              {DetailPendaftar?.name}
            </span>{' '}
            dari Sub-Kompetisi{' '}
            <span className="font-bold text-additions-brown-100">OMITS</span>?
          </Typography>
        }
      />
      <ModalConfirm
        open={tolakConfirm}
        setOpen={setTolakConfirm}
        Description={
          <Typography variant="p" weight="medium" className="text-center">
            Apakah kamu yakin ingin menolak peserta{' '}
            <span className="font-bold text-additions-brown-100">
              {DetailPendaftar?.name}
            </span>{' '}
            dari Sub-Kompetisi{' '}
            <span className="font-bold text-additions-brown-100">OMITS</span>?
          </Typography>
        }
      />
      <ModalConfirm
        open={revisiConfirm}
        setOpen={setRevisiConfirm}
        Description={
          <Typography variant="p" weight="medium" className="text-center">
            Apakah kamu yakin ingin merubah data peserta{' '}
            <span className="font-bold text-additions-brown-100">
              {DetailPendaftar?.name}
            </span>{' '}
            dari Sub-Kompetisi{' '}
            <span className="font-bold text-additions-brown-100">OMITS</span>?
          </Typography>
        }
      />
    </>
  );
}
