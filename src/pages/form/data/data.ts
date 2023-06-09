import { InputDataObject } from '../../../components/Form/models/interfaces'

export const inputsData: InputDataObject[] = [
    {
        inputId: 0,
        inputText: 'ФИО:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 1,
        inputText: 'Дата рождения:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 2,
        inputText: 'Семейное положение:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 3,
        inputText: 'Дети:',
        inputType: 'input',
        inputPlaceholder: '(количество/возраст)',
    },
    {
        inputId: 4,
        inputText: 'Место рождения:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 5,
        inputText: 'Прописка:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 6,
        inputText: 'Адрес проживания:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 7,
        inputText: 'Контактные телефоны:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 8,
        inputText: 'Почта:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 9,
        inputText: 'Направление деятельности, которое Вас интересует:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 10,
        inputText: 'Должностная позиция, на которую претендуете:',
        inputType: 'input',
        inputPlaceholder: '(исполнитель/руководитель)',
    },
    {
        inputId: 11,
        inputText: 'Минимальный уровень заработной платы:',
        inputType: 'input',
        inputPlaceholder: '',
    },
    {
        inputId: 12,
        inputText: 'Откуда Вы узнали о вакансии:',
        inputType: 'select',
        inputOptions: [
            {
                id: 0, 
                value: ''
            }, 
            {
                id: 1, 
                value: 'через hh.ru'
            },
            {
                id: 2, 
                value: 'работа России'
            }, 
            {
                id: 3, 
                value: 'проходил практику'
            }, 
            {
                id: 4, 
                value: 'рекомендации знакомых'
            }, 
            {
                id: 5, 
                value: 'данные с военкома'
            },
            {
                id: 6, 
                value: 'другой вариант'
            }, 
        ],
    },
    {
        inputId: 13,
        inputText: 'Образование (учебные заведения, курсы)',
        inputType: 'table',
        inputHeader: [
            {
                columnId: 0,
                columnText: 'Год поступления и окончания',
            },
            {
                columnId: 1,
                columnText: 'Учебное заведение',
            },
            {
                columnId: 2,
                columnText: 'Факультет, специальность',
            },
            {
                columnId: 3,
                columnText: 'Уровень образования',
            },
        ],
    },
    {
        inputId: 14,
        inputText: 'Наличие военного билета:',
        inputType: 'select',
        inputOptions: [
            {
                id: 0, 
                value: ''
            }, 
            {
                id: 1, 
                value: 'есть'
            },
            {
                id: 2, 
                value: 'являюсь призывником'
            }, 
            {
                id: 3, 
                value: 'вхожу в категорию лиц, не подлежащих призыву'
            },
        ],
    },
    {
        inputId: 15,
        inputText: 'Опыт работы',
        inputType: 'table',
        inputHeader: [
            {
                columnId: 0,
                columnText: 'Период работы (м.г/м.г)',
            },
            {
                columnId: 1,
                columnText: 'Должность, место работы',
            },
            {
                columnId: 2,
                columnText: 'Причина поиска (смены) работы',
            },
        ],
    },
    {
        inputId: 16,
        inputText: 'Перечислите подробно все должностные обязанности, выполняемые Вами.',
        inputType: 'textarea',
    },
    {
        inputId: 17,
        inputText: 'Дополнительная информация',
        inputType: 'table',
        inputHeader: [
            {
                columnId: 0,
                columnText: 'Степень владения ПК (программы)',
            },
            {
                columnId: 1,
                columnText: 'Степень владения иностранными языками (указать какими)',
            },
            {
                columnId: 2,
                columnText: 'Наличие водительского удостоверения и автомобиля',
            },
            {
                columnId: 3,
                columnText: 'Судимость (есть, нет), статья',
            },
        ],
    },
    {
        inputId: 18,
        inputText: 'Близкие родственники (жена/муж, отец, мать, братья, сестры)',
        inputType: 'table',
        inputHeader: [
            {
                columnId: 0,
                columnText: 'Степень родства',
            },
            {
                columnId: 1,
                columnText: 'Ф.И.О.',
            },
            {
                columnId: 2,
                columnText: 'Дата рождения',
            },
            {
                columnId: 3,
                columnText: 'Место работы, должность',
            },
            {
                columnId: 4,
                columnText: 'Место жительства',
            },
        ],
    },
    {
        inputId: 19,
        inputText: 'Какой из перечисленных периодов работы внес наибольший вклад в Ваше развитие? Почему?',
        inputType: 'textarea',
    },
    {
        inputId: 20,
        inputText: 'Что, по Вашему мнению, является наиболее привлекательным в работе?',
        inputType: 'textarea',
    },
    {
        inputId: 21,
        inputText: 'Что, по Вашему мнению, стимулирует людей работать наиболее эффективно?',
        inputType: 'textarea',
    },
    {
        inputId: 22,
        inputText: 'Почему нам стоит принять Вас на работу?',
        inputType: 'textarea',
    },
    {
        inputId: 23,
        inputText: 'Опишите зоны профессиональной деятельности, в которых Вы обладаете наибольшим практическим опытом и специальными знаниями:',
        inputType: 'textarea',
    },
    {
        inputId: 24,
        inputText: 'Какими качествами должен обладать исполнитель для успешного выполнения своих обязанностей?',
        inputType: 'textarea',
    },
    {
        inputId: 25,
        inputText: 'Какими качествами должен обладать руководитель подразделения для успешного управления своим коллективом?',
        inputType: 'textarea',
    },
    {
        inputId: 26,
        inputText: 'Назовите главные недостатки руководителя, которые больше всего могут мешать эффективной работе подразделения, организации?',
        inputType: 'textarea',
    },
    {
        inputId: 27,
        inputText: 'Что Вас привлекает в Исполнительном комитете г.Казани?',
        inputType: 'textarea',
    },
    {
        inputId: 28,
        inputText: 'Во время проведения переговоров, какими Вы предпочитаете пользоваться стратегиями (отметить):',
        inputType: 'checkbox',
        inputQuantity: 5,
        inputVariants: [
            {
                variantId: 0,
                variantText: 'противоборство, отстаивание своих интересов;',
            },
            {
                variantId: 1,
                variantText: 'компромисс;',
            },
            {
                variantId: 2,
                variantText: 'сотрудничество;',
            },
            {
                variantId: 3,
                variantText: 'уступка;',
            },
            {
                variantId: 4,
                variantText: 'избегание;',
            },
        ],
    },
    {
        inputId: 29,
        inputText: 'При каких условиях Вы готовы возглавить решение задачи (отметьте 2 варианта):',
        inputType: 'checkbox',
        inputQuantity: 2,
        inputVariants: [
            {
                variantId: 0,
                variantText: 'Вы являетесь начальником в данной группе;',
            },
            {
                variantId: 1,
                variantText: 'Вы точно знаете, как решать данную задачу;',
            },
            {
                variantId: 2,
                variantText: 'кроме Вас больше некому взять на себя ответственность;',
            },
            {
                variantId: 3,
                variantText: 'если есть более опытные коллеги, не буду мешать им руководить;',
            },
            {
                variantId: 4,
                variantText: 'это дело руководителя назначать ответственных за задачу;',
            },
        ],

    },
    {
        inputId: 30,
        inputText: 'В каком случае Вы готовы (или не готовы) отстаивать свою точку зрения, которую считаете правильной, перед вышестоящим руководством? Отметьте один вариант.',
        inputType: 'checkbox',
        inputQuantity: 1,
        inputVariants: [
            {
                variantId: 0,
                variantText: 'не буду спорить, так как начальник отвечает за все;',
            },
            {
                variantId: 1,
                variantText: 'выскажу свое мнение, но спорить не буду;',
            },
            {
                variantId: 2,
                variantText: 'буду отстаивать, если лично отвечаю за конечный результат;',
            },
            {
                variantId: 3,
                variantText: 'буду отстаивать, если не отвечаю за конечный результат, но от моего результата в значительной степени зависит успех работы;',
            },
            {
                variantId: 4,
                variantText: 'буду отстаивать, чтобы не пострадала репутация организации.',
            },
        ],
    },
    {
        inputId: 31,
        inputText: 'Ваши профессиональные планы на ближайший год (3 года)?',
        inputType: 'textarea',
    },
    {
        inputId: 32,
        inputText: 'Увлечения, хобби:',
        inputType: 'textarea',
    },
]