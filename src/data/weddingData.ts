import { WeddingConfig } from '../types/wedding';

export const weddingData: WeddingConfig = {
  couple: {
    groom: {
      fullName: 'T Arief Kurniawan',
      shortName: 'Arief',
      fatherName: 'Bpk. T Fadillah Oesman',
      motherName: 'Ibu Mardalena',
      orderInFamily: 'Putra pertama dari',
    },
    bride: {
      fullName: 'Eka',
      shortName: 'Elena',
      fatherName: 'Bpk. H. Hendra Wijaya',
      motherName: 'Ibu Hj. Dewi Sartika',
      orderInFamily: 'Putri pertama dari',
    },
    monogram: 'A & E',
  },
  events: {
    akad: {
      id: 'akad',
      title: 'Akad Nikah',
      dateFormatted: 'Minggu, 27 September 2026',
      targetTimestamp: '2026-09-27T08:00:00+07:00',
      timeRange: '08:00 - 10:00 WIB',
      venueName: 'Aula Operasional Room Kementerian Desa dan Pembangunan Daerah Tinggal',
      venueAddress: '6, Jl. TMP. Kalibata No.17, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750',
      mapsUrl: 'https://www.google.com/maps/dir//Kementerian+Desa+dan+Pembangunan+Daerah+Tertinggal,+6,+Jl.+TMP.+Kalibata+No.17,+RT.6%2FRW.7,+Rawajati,+Kec.+Pancoran,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12750/@-6.2547348,106.8461194,17z/data=!4m18!1m8!3m7!1s0x2e69f3b255bce217:0x7491bf2b2f7e6d94!2sKementerian+Desa+dan+Pembangunan+Daerah+Tertinggal!8m2!3d-6.2547348!4d106.850883!15sCglLZW1lbmRlc2GSARFnb3Zlcm5tZW50X29mZmljZeABAA!16s%2Fg%2F11bt_jdnw2!4m8!1m0!1m5!1m1!1s0x2e69f3b255bce217:0x7491bf2b2f7e6d94!2m2!1d106.850883!2d-6.2547348!3e3!5m1!1e2?hl=en&entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
    },
    resepsi: {
      id: 'resepsi',
      title: 'Resepsi Pernikahan',
      dateFormatted: 'Minggu, 27 September 2026',
      targetTimestamp: '2026-09-27T11:00:00+07:00',
      timeRange: '11:00 - 14:00 WIB',
      venueName: 'Aula Operasional Room Kementerian Desa dan Pembangunan Daerah Tinggal',
      venueAddress: '6, Jl. TMP. Kalibata No.17, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750',
      mapsUrl: 'https://www.google.com/maps/dir//Kementerian+Desa+dan+Pembangunan+Daerah+Tertinggal,+6,+Jl.+TMP.+Kalibata+No.17,+RT.6%2FRW.7,+Rawajati,+Kec.+Pancoran,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12750/@-6.2547348,106.8461194,17z/data=!4m18!1m8!3m7!1s0x2e69f3b255bce217:0x7491bf2b2f7e6d94!2sKementerian+Desa+dan+Pembangunan+Daerah+Tertinggal!8m2!3d-6.2547348!4d106.850883!15sCglLZW1lbmRlc2GSARFnb3Zlcm5tZW50X29mZmljZeABAA!16s%2Fg%2F11bt_jdnw2!4m8!1m0!1m5!1m1!1s0x2e69f3b255bce217:0x7491bf2b2f7e6d94!2m2!1d106.850883!2d-6.2547348!3e3!5m1!1e2?hl=en&entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
    },
  },
  verse: {
    surah: 'Ar-Rum',
    ayat: 21,
    arabicText: 'وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
    indonesianTranslation: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.',
  },
  bankAccounts: [
    {
      id: 'bank-bca',
      bankName: 'Bank Central Asia (BCA)',
      accountNumber: '8735091234',
      accountHolder: 'T Arief Kurniawan',
      recipientCategory: 'Mempelai Pria',
    },
    {
      id: 'bank-mandiri',
      bankName: 'Bank Mandiri',
      accountNumber: '1370019827364',
      accountHolder: 'Eka Safira',
      recipientCategory: 'Mempelai Wanita',
    },
  ],
  defaultGuestFallback: 'Tamu Undangan',
  staticShareToken: import.meta.env.VITE_STATIC_SHARE_TOKEN || 'arka-wedding',
  whatsappTemplate: (guestName: string, invitationUrl: string) => {
    return `Bismillahirrohmanirrohim\nAssalamu'alaikum Warahmatullahi Wabarakatuh\n\nYth. *${guestName}*,\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami:\n\n*T Arief Kurniawan & Eka*\n\nBerikut tautan undangan digital Anda:\n${invitationUrl}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh\n\nKami yang berbahagia,\n*Keluarga Besar Arief & Eka*`;
  },
};
