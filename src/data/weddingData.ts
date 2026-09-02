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
      fullName: 'Eka Isni Warsuti',
      shortName: 'Isni',
      fatherName: 'Alm. Bpk. Joko Warsito',
      motherName: 'Ibu Mardiana',
      orderInFamily: 'Putri pertama dari',
    },
    monogram: 'A & I',
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
      mapsUrl: 'https://www.google.com/maps/place/Kementerian+Desa+dan+Pembangunan+Daerah+Tertinggal/@-6.2547348,106.8483081,1176m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69f3b255bce217:0x7491bf2b2f7e6d94!8m2!3d-6.2547348!4d106.850883!16s%2Fg%2F11bt_jdnw2!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
    },
    resepsi: {
      id: 'resepsi',
      title: 'Resepsi Pernikahan',
      dateFormatted: 'Minggu, 27 September 2026',
      targetTimestamp: '2026-09-27T11:00:00+07:00',
      timeRange: '11:00 - 15:00 WIB',
      venueName: 'Aula Operasional Room Kementerian Desa dan Pembangunan Daerah Tinggal',
      venueAddress: '6, Jl. TMP. Kalibata No.17, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12750',
      mapsUrl: 'https://www.google.com/maps/place/Kementerian+Desa+dan+Pembangunan+Daerah+Tertinggal/@-6.2547348,106.8483081,1176m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e69f3b255bce217:0x7491bf2b2f7e6d94!8m2!3d-6.2547348!4d106.850883!16s%2Fg%2F11bt_jdnw2!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D',
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
      id: 'bank-bca-mempelai-pria',
      bankName: 'Bank Central Asia (BCA)',
      accountNumber: '4741435432',
      accountHolder: 'T Arief Kurniawan',
      recipientCategory: 'Mempelai Pria',
      category: 'mempelai',
    },
    {
      id: 'bank-bca-mempelai-wanita',
      bankName: 'Bank Central Asia (BCA)',
      accountNumber: '2680333672',
      accountHolder: 'Eka Isni Warsuti',
      recipientCategory: 'Mempelai Wanita',
      category: 'mempelai',
    },
    {
      id: 'bank-bsi-keluarga-pria',
      bankName: 'Bank Syariah Indonesia (BSI)',
      accountNumber: '7004144605',
      accountHolder: 'T Fadillah Oesman',
      recipientCategory: 'Keluarga Mempelai Pria',
      category: 'keluarga_pria',
    }
  ],
  defaultGuestFallback: 'Tamu Undangan',
  staticShareToken: import.meta.env.VITE_STATIC_SHARE_TOKEN || 'arka-wedding',
  whatsappTemplate: (guestName: string, invitationUrl: string) => {
    return `Bismillahirrohmanirrohim\nAssalamu'alaikum Warahmatullahi Wabarakatuh\n\nYth. *${guestName}*,\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada pernikahan kami:\n\n*T Arief Kurniawan & Eka Isni Warsuti*\n\nBerikut tautan undangan digital Anda:\n${invitationUrl}\n\nMerupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh\n\nKami yang berbahagia,\n*Keluarga Besar Arief & Isni*`;
  },
};
