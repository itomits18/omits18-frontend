'use client';

import useGetRegion from '@/app/competition/hooks/useGetRegion';
import Typography from '@/components/Typography';
import FileUpload from '@/components/form/FileUpload';
import ImagePreview from '@/components/form/ImagePreview';
import Input from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { regionOptions } from '@/contents/ListRegions';
import { cn } from '@/lib/utils';
import { EditDataSchema } from '@/validation/EditDataSchema';
import { ChevronLeft, Phone } from 'lucide-react';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import ModalVerification from '../(container)/ModalVerification';
import useGetDetailParticipants, {
  detailDefaultValue,
  GetParticipants,
} from '../../hooks/useGetDetailParticipants';

export default function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [terimaConfirm, setTerimaConfirm] = useState(false);
  const [tolakConfirm, setTolakConfirm] = useState(false);
  const [revisiConfirm, setRevisiConfirm] = useState(false);

  const [store, setStore] = useState({
    proof_identitas: 'https://dummyimage.com/600x400/000/fff',
  });
  const [isEdit, setIsEdit] = useState(false);
  const [updateData, setUpdateData] =
    useState<GetParticipants>(detailDefaultValue);

  const { data, isLoading } = useGetDetailParticipants(id);
  const { data: DataRegion } = useGetRegion(data?.postal.toString() || '1');

  // const region = regionOptions.find(
  //   (x) => x.value.toUpperCase() === DataRegion?.region,
  // );

  const methods = useForm<z.infer<typeof EditDataSchema>>({
    mode: 'onTouched',
  });

  const onSubmit = () => {
    let _testsubmit = '';
    _testsubmit += 'hello world';
  };

  const onChangeData = () => {
    const GetData: z.infer<typeof EditDataSchema> = methods.getValues();
    const [type, sub_type] = GetData.jenjang.includes('-')
      ? GetData.jenjang.split(' - ')
      : '';

    const sliceString = GetData.proof_identitas.slice(
      'https://s3.jkt.dewavps.com/omits-storage/'.length,
    );
    const match = sliceString.match(/([\w-]+)\.(jpe?g|png)/gi);
    const cleanUrl = match ? match[0] : '';

    const newData: GetParticipants = {
      ...updateData,
      name: GetData.fullname || updateData.name,
      instance_name: GetData.nama_sekolah || updateData.instance_name,
      instance_address: GetData.alamat_sekolah || updateData.instance_address,
      phone: GetData.phone_number || updateData.phone,
      participant_detail: {
        ...updateData.participant_detail,
        student_id:
          GetData.identitas || updateData.participant_detail.student_id,
        guardian_phone:
          GetData.wali_phone_number ||
          updateData.participant_detail.guardian_phone ||
          'None',
        student_id_url: !GetData.proof_identitas.startsWith('https')
          ? GetData.proof_identitas
          : cleanUrl,
        type,
        sub_type,
      },
      postal_detail: {
        ...updateData.postal_detail,
        region: GetData.region.toUpperCase(),
      },
    };

    setUpdateData((pre) => ({
      ...pre,
      ...newData,
    }));
  };

  useEffect(() => {
    if (!isLoading) {
      setUpdateData(data as GetParticipants);
      setStore({
        proof_identitas: data?.participant_detail.student_id_url as string,
      });
      methods.register('proof_identitas', {
        value: data?.participant_detail.student_id_url as string,
      });
    }
  }, [isLoading]);

  return (
    !isLoading && (
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
                className="font-semibold text-green-500 max-[350px]:text-2xl max-md:text-3xl md:w-[50%]"
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
                  <Link href={'https://wa.me/+62' + data?.phone.substring(1)}>
                    <Phone size={32} className="h-8 w-8" />
                    <span className="font-semibold">Contact Pendaftar</span>
                  </Link>
                </Button>

                <div className="flex items-center justify-center gap-2 max-[350px]:grid max-[350px]:grid-cols-2">
                  <Button
                    variant={'green'}
                    size="md"
                    onClick={() => {
                      if (data?.participant_detail.status === 'VERIFIED')
                        return;
                      setTerimaConfirm(true);
                    }}
                    disabled={['REJECTED'].includes(
                      data?.participant_detail.status as string,
                    )}
                  >
                    Terima
                  </Button>
                  <Button
                    variant={'brown'}
                    size="md"
                    onClick={() => {
                      if (data?.participant_detail.status === 'REJECTED')
                        return;
                      setTolakConfirm(true);
                    }}
                    disabled={['VERIFIED'].includes(
                      data?.participant_detail.status as string,
                    )}
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

                        onChangeData();
                      }

                      setIsEdit((pre) => !pre);
                    }}
                    disabled={['VERIFIED', 'REJECTED'].includes(
                      data?.participant_detail.status as string,
                    )}
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
                <div className="w-full">
                  <Typography
                    variant="p"
                    weight="bold"
                    className={cn('text-white-500', 'md:text-lg')}
                  >
                    Jenjang
                  </Typography>

                  {!isLoading && (
                    <Controller
                      name={'jenjang'}
                      control={methods.control}
                      defaultValue={`${data?.participant_detail.type} - ${data?.participant_detail.sub_type}`}
                      disabled={!isEdit}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={!isEdit}
                        >
                          <SelectTrigger
                            id={id}
                            className={cn(
                              'bg-neutral-main w-full cursor-pointer rounded-lg focus:ring-2 focus:outline-none',
                              'px-6',
                              field.value &&
                                'border-black-400 text-black-400 focus:ring-0',
                            )}
                          >
                            <SelectValue
                              placeholder={`${data?.participant_detail.type} - ${data?.participant_detail.sub_type}`}
                            />
                          </SelectTrigger>
                          <SelectContent className="rounded-md border border-gray-200 bg-white shadow-lg">
                            <SelectGroup>
                              {[
                                { value: 'OMITS - SD', label: 'OMITS - SD' },
                                { value: 'OMITS - SMP', label: 'OMITS - SMP' },
                                { value: 'OMITS - SMA', label: 'OMITS - SMA' },
                                {
                                  value: 'MISSION - MISSION',
                                  label: 'MISSION - MISSION',
                                },
                              ].map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                  className="cursor-pointer px-4 py-2 text-[#8F8B8A] hover:bg-[#E7E6E6]"
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  )}
                </div>

                <div className="w-full">
                  <Typography
                    variant="p"
                    weight="bold"
                    className={cn('text-white-500', 'md:text-lg')}
                  >
                    Region
                  </Typography>

                  {!isLoading && (
                    <Controller
                      name={'region'}
                      control={methods.control}
                      disabled={!isEdit}
                      defaultValue={
                        regionOptions.find(
                          (x) =>
                            x.value.toLowerCase() ===
                            data?.postal_detail.region.toLowerCase(),
                        )?.value
                      }
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={!isEdit}
                        >
                          <SelectTrigger
                            id={id}
                            className={cn(
                              'bg-neutral-main w-full cursor-pointer rounded-lg focus:ring-2 focus:outline-none',
                              'px-6',
                              field.value &&
                                'border-black-400 text-black-400 focus:ring-0',
                            )}
                          >
                            <SelectValue
                              placeholder={
                                regionOptions.find(
                                  (x) =>
                                    x.value.toLowerCase() ===
                                    data?.postal_detail.region.toLowerCase(),
                                )?.label
                              }
                            />
                          </SelectTrigger>
                          <SelectContent className="rounded-md border border-gray-200 bg-white shadow-lg">
                            <SelectGroup>
                              {regionOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                  className="cursor-pointer px-4 py-2 text-[#8F8B8A] hover:bg-[#E7E6E6]"
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  )}
                </div>

                <Input
                  labelTextClassname="text-black-300"
                  id="nama_sekolah"
                  label="Nama Sekolah"
                  defaultValue={data?.instance_name}
                  placeholder="Load data..."
                  disabled={!isEdit}
                />
                <Input
                  labelTextClassname="text-black-300"
                  id="alamat_sekolah"
                  label="Alamat Sekolah"
                  defaultValue={data?.instance_address}
                  placeholder="Load data..."
                  disabled={!isEdit}
                />
                <Input
                  labelTextClassname="text-black-300"
                  id="provinsi"
                  label="Provinsi"
                  defaultValue={DataRegion?.province}
                  placeholder="Load data..."
                  disabled={true}
                />
                <Input
                  labelTextClassname="text-black-300"
                  id="kota"
                  label="Kota/Kabupaten"
                  defaultValue={DataRegion?.regency}
                  placeholder="Load data..."
                  disabled={true}
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
                  defaultValue={data?.name}
                  placeholder="Load data..."
                  disabled={!isEdit}
                />
                <Input
                  labelTextClassname="text-black-300"
                  id="identitas"
                  label="Nomor Identitas"
                  defaultValue={data?.participant_detail.student_id}
                  placeholder="Load data..."
                  disabled={!isEdit}
                />
                <Input
                  labelTextClassname="text-black-300"
                  id="phone_number"
                  label="Nomor Telpon Peserta"
                  defaultValue={data?.phone}
                  placeholder="Load data..."
                  disabled={!isEdit}
                />
                <Input
                  labelTextClassname="text-black-300"
                  id="wali_phone_number"
                  label="Nomor Telpon Wali Peserta "
                  defaultValue={
                    data?.participant_detail.guardian_phone || 'None'
                  }
                  placeholder="Load data..."
                  disabled={!isEdit}
                />

                {store.proof_identitas ? (
                  <div className="col-span-2 max-md:col-span-1">
                    <ImagePreview
                      type="omits"
                      id="proof_identitas"
                      name="Bukti Identitas"
                      link={data?.participant_detail.student_id_url as string}
                      label="Bukti Kartu Identitas"
                      readOnly={!isEdit}
                      deleteFile={setStore}
                    />
                  </div>
                ) : (
                  <div className="relative col-span-2 max-md:col-span-1">
                    <FileUpload
                      type="omits"
                      id="proof_identitas"
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

        <ModalVerification
          id={id}
          type="terima"
          modalOpen={terimaConfirm}
          setModalOpen={setTerimaConfirm}
          data={data as GetParticipants}
        />
        <ModalVerification
          id={id}
          type="tolak"
          modalOpen={tolakConfirm}
          setModalOpen={setTolakConfirm}
          data={data as GetParticipants}
        />
        <ModalVerification
          id={id}
          type="revisi"
          modalOpen={revisiConfirm}
          setModalOpen={setRevisiConfirm}
          data={data as GetParticipants}
          updateData={updateData}
        />
      </>
    )
  );
}
