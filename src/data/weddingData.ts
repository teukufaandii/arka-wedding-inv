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
      motherName: 'Ibu Marbiah',
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
      timeRange: '08:00 - 09:00 WIB',
      venueName: 'Aula Auditorium Kementerian Desa dan Pembangunan Daerah Tinggal Ps. Rebo',
      venueAddress: 'Jl. Komp. Lapan No.70, RT.7/RW.9, Pekayon, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13710',
      mapsUrl: 'https://maps.app.goo.gl/qzxTjZgnuva21xZX9',
    },
    resepsi: {
      id: 'resepsi',
      title: 'Resepsi Pernikahan',
      dateFormatted: 'Minggu, 27 September 2026',
      targetTimestamp: '2026-09-27T11:00:00+07:00',
      timeRange: '11:00 - 15:00 WIB',
      venueName: 'Aula Auditorium Kementerian Desa dan Pembangunan Daerah Tinggal Ps. Rebo',
      venueAddress: 'Jl. Komp. Lapan No.70, RT.7/RW.9, Pekayon, Kec. Ps. Rebo, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13710',
      mapsUrl: 'https://maps.app.goo.gl/qzxTjZgnuva21xZX9',
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
