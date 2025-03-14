'use client'

import React from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Contact.module.scss';

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    alert('Form submitted successfully');
  };

  return (
    <div
      className={`${styles['contact']} flex justify-center items-center flex-col w-full p-8 mt-[15rem]`}
    >
      <div className={`${styles['contact__info']} flex flex-col items-center justify-center max-w-full md:max-w-md py-[5rem] md:p-[5rem] mt-[15rem]`}>
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <p className="tracking-widest">LEONIDES</p>
        <div className="logo mt-4">
          <Image
            src="/images/ornament.svg"
            width={150}
            height={150}
            alt="ornament"
            className="ml-2"
          />
        </div>
      </div>

        <div className="max-w-full w-6xl">
          <div className="flex flex-col items-center justify-center mt-4">
            <p className="font-bold text-lg">
              ADRESA <span className="text-main">LEVOČSKÁ 5, PREŠOV, 08001</span>
            </p>
            <p className="font-bold text-lg">
              TELEFÓN <span className="text-main">+421 905 181 972</span>
            </p>
            <p className="font-bold text-lg">
              MESTO <span className="text-main">PREŠOV / SLOVAKIA</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col mt-[5rem]"
          >
            <div className="w-full flex flex-col lg:flex-row gap-3">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <input placeholder="MENO" id="name" className="border-b w-full p-1"
                    {...register('name', { required: 'Meno je povinné' })}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <input placeholder="EMAIL" id="email" className="border-b w-full p-1"
                    {...register('email', {
                      required: 'Email je povinný',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Nesprávny formát emailu',
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <input placeholder="TELEFON" id="phone" className="border-b w-full p-1"
                    {...register('phone', {
                      required: 'Telefón je povinný',
                      pattern: {
                        value: /^[0-9+-]{9,14}$/,
                        message: 'Nesprávny formát telefónneho čísla',
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="text-red-500">{errors.phone.message}</span>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="h-full">
                  <textarea placeholder="ODKAZ..." id="message" rows={4} className="border-b w-full h-full p-1"
                    {...register('message', {
                      required: 'Odkaz je povinný',
                    })}
                  />
                  {errors.message && (
                    <span className="text-red-500">{errors.message.message}</span>
                  )}
                </div>
              </div>
            </div>


            <button
              type="submit"
              className="mt-16 py-2 px-4 text-black w-full"
            >
              ODOSLAT
            </button>
          </form>
        </div>
      <div className={` flex flex-col items-center justify-center max-w-full md:max-w-md py-[5rem] md:p-[5rem] mt-[10rem]`}>
        <div className="logo mt-4">
          <Image
            src="/images/logo.svg"
            width={150}
            height={150}
            alt="ornament"
            className="ml-2"
          />
          <Image
            src="/images/ornament.svg"
            width={150}
            height={150}
            alt="ornament"
            className="ml-2"
          />
          <div className="flex-1 flex flex-col items-center">
            <p className="text-xs font-light mt-2">Copyright 2016</p>
            <p className="text-xs font-light">Všetky prava vyhradene</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
