export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Jamjam Firman Maulana, S.Kom',
            child: 'Putra ke 2',
            father: 'Zainal Mutakin (Alm)',
            mother: 'Dedah Rosidah',
            image: './src/assets/images/jam.png'
        },
        P: {
            id: 2,
            name: 'Neng Yunitasari',
            child: 'Putri ke 2',
            father: 'Yayan',
            mother: 'Aan',
            image: './src/assets/images/neng.png'
        },

        couple: './src/assets/images/dua.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Maret',
            date: '29',
            day: 'Minggu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Maret',
            date: '29',
            day: 'Minggu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Jl Gembor Kp. Muhara desa Diladaeun, KEC.LEBAKGEDONG, KAB. LEBAK, BANTEN, 42373'
    },

    link: {
        calendar: 'https://calendar.app.google/6vfRQirRibtAcxLz6',
        map: 'https://maps.app.goo.gl/XXua38uKCU9hsxyHA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/gabung.png'
        },
        {
            id: 2,
            image: './src/assets/images/dua.png'
        },
        {
            id: 3,
            image: './src/assets/images/kalem.png'
        },
        {
            id: 4,
            image: './src/assets/images/toel.png'
        },
        {
            id: 5,
            image: './src/assets/images/edit.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Jamjam Firman Maulana',
            icon: './src/assets/images/dana.png',
            rekening: '087778968095'
        },
        {
            id: 2,
            name: 'Neng Yunitasari',
            icon: './src/assets/images/bri.png',
            rekening: '329301032213532'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbx_fDuQgRXwY1LgWiktVFCW-4tbtv_J3V26c96DjGN57Ko8bSvUk1YtPvSaS3bmJ12a5A/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
