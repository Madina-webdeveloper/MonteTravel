export const lang = {
    russian: "Russian",
    english: "English",
    uzbek: "Uzbek"
};
export let selectionsLang = "English"
export const setSelectionsLang= (body) => {

    localStorage.setItem("lang",body)
    selectionsLang = body;
    window.location.reload()
}
export const language = {
    russian: {
        header: {
            btn: "Свяжитесь с нами",
        },
        hero: {
            description: "лучшие предложения по лучшим направлениям мира",
            title: "Осуществляйте свои мечты и путешествуйте",
            paragraph:
                "С Monte вы можете испытать новые путешествия и лучшие туристические направления, которые мы можем предложить.",
            btn: "Наш пункт назначения",
        },
        experience: {
            left: {
                title: "Получить опыт",
                description:
                    "С Monte вы можете получить наилучшие впечатления от путешествия в отпуск, и мы всегда обновляем последние и лучшие направления в мире.",
            },
            right: {
                price: {
                    title: "Доступные цены",
                    description:
                        "Мы предлагаем очень доступные цены по сравнению с другими.",
                },
                experienc: {
                    title: "Незабываемый опыт",
                    description: "Мы предлагаем отдых, который будет незабываемым.",
                },
                friendly: {
                    title: "Очень дружелюбное обслуживание",
                    description:
                        "Мы обеспечим отличный и дружелюбный сервис ради наших клиентов.",
                },
            },
        },
        destination: {
            left: {
                title: "Направления Самые популярные",
                description:
                    "Некоторые из самых популярных направлений для посещения с видом на красивый.",
            },
            right: {
                cappadocia: {
                    title: "Дубай",
                    btn: "Бронирование билетов",
                    person: " на 5 дней ",
                    price: "Цена",
                },
                sossus: {
                    title: "Таиланд",
                    btn: "Бронирование билетов",
                    person: " на 7 дней ",
                    price: "Цена",
                },
                albuq: {
                    title: "Египет",
                    btn: "Бронирование билетов",
                    person: " на 8 дней ",
                    price: "Цена",
                },
                antalia: {
                    title: "Анталия",
                    btn: "Бронирование билетов",
                    person: " на 8 дней ",
                    price: "Цена",
                },
            },
        },
        banner: {
            title: "Мы готовы предоставить вам лучшее путешествие",
            description:
                "У нас есть множество лучших направлений в мире, которые вы можете выбрать в качестве пункта назначения своей поездки.",
            btn: "Связаться сейчас",
        },
        contact: {
            firstName: "Пожалуйста, напишите свое имя",
            mobile: "Пожалуйста, напишите свой номер телефона ",
            email: "Пожалуйста, напишите свой адрес электронной почты",
            button: "Представлять на рассмотрение",
        },
        footer: {
            description:
                "С Monte вы можете испытать новые путешествия и лучшие туристические направления, которые мы можем предложить.",
            descriptions: {
                cappadocia: "Дубай",
                sossus: "Таиланд",
                albuq: "Египет",
                antalia:"Анталия",
                address: "Адреса",
            },
            follow: "Следите за обновлениями",
        },
    },
    english: {
        header: {
            btn: "Contact us",
        },
        hero: {
            description: "the best deals on the world's best destinations",
            title: "Make your dreams happen and Travel",
            paragraph:
                "With Monte you can experience new travel and the best tourist destinations that we have to offer",
            btn: "Our destination",
        },
        experience: {
            left: {
                title: "Get Experience Which are fun",
                description:
                    "With Monte you can get the best experience on holiday travel, and we always update the latest and best destinations in the world",
            },
            right: {
                price: {
                    title: "Affordable prices",
                    description:
                        "We provide some very affordable prices compared to others.",
                },
                experienc: {
                    title: "Unforgettable experience",
                    description:
                        "We provide a vacation experience that will be unforgettable.",
                },
                friendly: {
                    title: "Very Friendly Service",
                    description:
                        "We will provide excellent and friendly service for the sake of our customers.",
                },
            },
        },
        destination: {
            left: {
                title: "DestinationsMost Popular",
                description:
                    "Some of the most popular destinations for you visit with a view the beautiful one.",
            },
            right: {
                cappadocia: {
                    title: "Dubai",
                    btn: "Ticket booking",
                    person: " for 5 days",
                    price: "Price",
                },
                sossus: {
                    title: "Thailand",
                    btn: "Ticket booking",
                    person: " for 7 days",
                    price: "Price",
                },
                albuq: {
                    title: "Egypt",
                    btn: "Ticket booking",
                    person: " for 8 days",
                    price: "Price",
                },
                   antalia: {
                    title: "Antalya",
                    btn: "Ticket booking",
                    person: " for 8 days",
                    price: "Price",
                },
            },
        },
        banner: {
            title: "We are ready to provide the best trip for you",
            description:
                "We have a variety of the world's best destinations that you can choose as your trip destination",
            btn: "Contact Now",
        },
        contact: {
            firstName: "Please write your name",
            mobile: "Please write your phone number ",
            email: "Please write your email",
            button: "Submit",
        },
        footer: {
            description:
                "With Monte you can experience new travel and the best tourist destinations that we have to offer",
            descriptions: {
                cappadocia: "Dubai",
                sossus: "Thailand",
                albuq: "Egypt",
                antalia:"Antalya",
                address: "Destinations",
            },
            follow: "Follow us",
        },
    },
    uzbek: {
        header: {
            btn: "Biz bilan bog'lanish",
        },
        hero: {
            description: "dunyodagi eng yaxshi yo'nalishlar bo'yicha eng yaxshi takliflar",
            title: "Orzularingizni amalga oshiring va sayohat qiling",
            paragraph:
                "Monte bilan siz yangi sayohat tajribalarini va biz taklif qiladigan eng yaxshi sayohat yo'nalishlarini boshdan kechirishingiz mumkin.",
            btn: "Bizning maqsadimiz",
        },
        experience: {
            left: {
                title: "Tajriba orttirish uchun",
                description:
                    "Monte bilan siz eng yaxshi dam olish sayohati tajribasiga ega bo'lishingiz mumkin va biz doimo dunyodagi eng so'nggi va eng zo'r yo'nalishlarni yangilab boramiz.",
            },
            right: {
                price: {
                    title: "Qulay narxlar",
                    description:
                        "Biz boshqalarga nisbatan juda hamyonbop narxlarni taklif qilamiz.",
                },
                experienc: {
                    title: "Unutilmas tajriba",
                    description: "Biz unutilmas dam olishni taklif qilamiz.",
                },
                friendly: {
                    title: "Juda samimiy xizmat",
                    description:
                        "Biz mijozlarimiz uchun mukammal va samimiy xizmatni taqdim etamiz.",
                },
            },
        },
        destination: {
            left: {
                title: "Eng mashhur yo'nalishlar",
                description:
                    "Tashrif buyuradigan eng mashhur joylardan ba'zilari go'zal manzaralardir.",
            },
            right: {
                cappadocia: {
                    title: "Dubay",
                    btn: "Chipta bron qilish",
                    person: " 5 kun davomida",
                    price: "Narxi",
                },
                sossus: {
                    title: "Tailand",
                  
                    btn: "Chipta bron qilish",
                    person: " 7 kun davomida",
                    price: "Narxi",
                },
                albuq: {
                    title: "Misr",
                    btn: "Chipta bron qilish",
                    person: " 8 kun davomida",
                    price: "Narxi",
                  
                },
                antalia: {
                    title: "Antaliya",
                    btn: "Chipta bron qilish",
                    person: " 8 kun davomida",
                    price: "Narxi",
                },
            },
        },
        banner: {
            title: "Biz sizga eng yaxshi sayohat tajribasini taqdim etishga tayyormiz.",
            description:
                "Bizda dunyoning ko'plab eng yaxshi yo'nalishlari bor, siz o'zingizning sayohat joyingiz sifatida tanlashingiz mumkin.",
            btn: "Hoziroq bog'laning",
        },
        contact: {
            firstName: "Iltimos, ismingizni kiriting",
            mobile: "Iltimos telefon raqamingizni kiriting",
            email: "Iltimos, elektron pochta manzilingizni kiriting",
            button: "Ko'rib chiqish uchun yuboring",
        },
        footer: {
            description:
                "Monte bilan siz yangi sayohat tajribalarini va biz taklif qiladigan eng yaxshi sayohat yo'nalishlarini boshdan kechirishingiz mumkin.",
            descriptions: {
                cappadocia: "Dubay",
                sossus: "Tailand",
                albuq: "Misr",
                antalia:"Antaliya",
                address: "Manzillar",
            },
            follow: "Yangiliklar",
        },
    },
};
