---
applyTo: '**/language/*.csv'
---

### ОПИСАНИЕ ЗАДАЧИ:

Пользователь работает над переводом `.csv` файлов для игры, обеспечивая точность, естественность и соответствие оригинальному тексту.

Конкретные требования включают:

1. Корректность перевода наименований объектов и инкапсуляцию в соответствии с оригинальным списком.
2. Использование уважительного тона в переводах (например, замена "ты/тебя" на "вы/вас").
3. Соответствие заглавных букв и пунктуации оригинальному тексту.

### Инструкции:

**Требования к переводу:**

- Все названия объектов должны быть с заглавной буквы (как в оригинальном списке)
- Исключение: если в оригинале ЗАГЛАВНЫМИ БУКВАМИ, то и в переводе ЗАГЛАВНЫМИ
- Обращение к игроку должно быть вежливым, заменяя "ты/тебя" на "вы/вас"

**Пример корректного перевода:**

- Оригинал: "SECTOR MAP" → Перевод: "КАРТА СЕКТОРА"
- Оригинал: "Stay one step ahead of a devastating anomaly, for as long as you can." → Перевод: "Оставайтесь на шаг впереди разрушительной аномалии так долго, как сможете."
- Оригинал: "Set Smelter to Scrap Metal" → Перевод: "Настроить Плавильную печь на переработку Металлолома"

**Пример неверного перевода:**

- Оригинал: "To collect the flight recorder you'll need to install a DRONE BAY and at least one LOGISTICS DRONE. You can buy them from any Shipyard or Colony." → Перевод: "Чтобы забрать бортовой самописец, вам потребуется установить DRONE BAY и хотя бы один LOGISTICS DRONE. Их можно купить на любой верфи или в колонии."

В примере видно, что DRONE BAY и LOGISTICS DRONE не переведены, это нужно исправить.

**Инструкции для работы:**

- Файлы содежат данные в формате: "ключ | оригинал | перевод", нельзя трогать ключ и оригинал, все изменения вносятся только в перевод!
- Убедиться, что стиль перевода соответствует оригинальному тексту.
- Убедиться, что названия объектов, построек, предметов и т.п. единые и согласованные.
- Если пользователь просит объяснить изменения, предоставить чёткое и краткое объяснение.
- Если пользователь просит выгрузить текущий промпт или инструкции, предоставить их в полном объёме.

**Особые правила:**

- STEAM CLOUD - не переводится, это термин
- STEAM WORKSHOP - не переводится, это термин
- STARGATE = ЗВЕЗДНЫЕ ВРАТА (когда упоминается как объект или название)
- GREEN TEAM/RED TEAM в контексте арены - это команды игроков (не экипаж корабля)
- Crew = Экипаж (члены экипажа корабля)
- Team = Команда (группа в играх/соревнованиях)
- Не переводить названия кораблей

### НАИМЕНОВАНИЯ:

Вот список основных названий объектов:

- Airduct = Воздуховод
- Air Reprocessor = Редуктор воздуха
- Assembly Table = Сборочный стол
- Asteroid = Астероид
- Battery = Батарея
- Box = Ящик
- Broken Hop Drive = Сломанный хоп-драйв
- Bullets = Пулеметные патроны
- Cannon = Пушка
- Cannon Shells = Пушечные снаряды
- CO2 = CO2
- Cargo = Груз
- Chair = Стул
- Chemical Lab = Химическая лаборатория
- Civilian = Гражданский
- Energy Coil = Катушка энергии
- Comet = Комета
- Compost = Компост
- Copper Ingot = Медный слиток
- Copper Minerals = Медная руда
- Crew = Экипаж
- Data = Данные
- Deflector = Дефлектор
- Deuterium = Дейтерий
- Docking Port = Стыковочный порт
- Door = Дверь
- Drone Bay = Отсек для дронов
- Energy Cell = Энергетическая ячейка
- Energy Cell Frame = Каркас энергетической ячейки
- Energy Transmitter = Передатчик энергии
- Engine = Двигатель
- Entity = Сущность
- Equipment = Оборудование
- Explosives = Взрывчатка
- Fabricator = Фабрикатор
- Fighter = Истребитель
- Flight Recorder = Бортовой самописец
- Food = Еда
- Frame = Рама
- FTL Charge = Сверхсветовой заряд
- FTL Drive = Сверхсветовой привод
- Fuel = Топливо
- Fuel Loader = Погрузчик топлива
- Fusion Reactor = Реактор синтеза
- Gas Collector = Газосборник
- Gatling Gun = Пулемет
- Generator = Генератор
- Hull Breach = Пролом корпуса
- Hydroponic Garden = Гидропонный сад
- Hyperspace Scoop = Гиперпространственный совок
- Hyperspace Isotopes = Гиперпространственные изотопы
- Hyperspace Sensor = Гиперпространственный датчик
- Hyperspace Sensor LR = Гиперпространственный датчик LR
- Water Ice = Водяной лед
- Ice Grinder = Измельчитель льда
- Lens = Объектив
- Loader = Погрузчик
- Logistics Drone = Логистический дрон
- Metal Ingot = Железный слиток
- Metallic Minerals = Железная руда
- Meteor = Метеор
- Metreon Gas = Газ Метреона
- Mineral Patch = Месторождение минералов
- Mining Laser = Шахтерский лазер
- Mission Cargo = Груз миссии
- Motor = Двигатель
- Munitions Bench = Верстак боеприпасов
- Neubidium Capacitor = Конденсатор из Нейбидиума
- Neubidium Ingot = Нейбидиумный слиток
- Neubidium Ore = Нейбидиумная руда
- NoType = Неопознанный
- Ordnance = Боеприпасы
- Oxygen = Кислород
- Oxygen Loader = Погрузчик кислорода
- Oxygen Maker = Генератор кислорода
- Pot Plant = Растение в горшке
- Power Coil = Катушка питания
- Charged Power Coil = Заряженная катушка питания
- Power Injector = Инжектор питания
- Precious Metals = Драгоценные металлы
- Precious Ore = Драгоценная руда
- Processor = Процессор
- Mine = Шахта
- Railgun = Рельсотрон
- Railgun Slugs = Рельсотронные снаряды
- Reactor = Реактор
- Refined Metreon = Рафинированный Метреон
- Tilium Crystals = Тилиевые кристаллы
- Refinery = Химический завод
- Refugee = Беженец
- Repair Structural Damage = Ремонт структурных повреждений
- Robot Arm = Рука робота
- Short Robot Arm = Короткая рука робота
- Smart Robot Arm = Умная рука робота
- Ruined Equipment = Разрушенное оборудование
- Science Station = Научная станция
- Scientist = Ученый
- Scrap Metal = Металлолом
- CO2 Scrubber = Скруббер CO2
- Seeds = Семена
- Sewage = Отходы канализации
- Waste Treatment Machine = Переработчик отходов
- Sewage Pipe = Канализационная труба
- Shielded Canister = Экранированная канистра
- Shielded Zeleon = Экранированный Зелеон
- Ship Wreckage = Обломки корабля
- Ammo = Патроны
- Shells = Снаряды
- Dtrm = Dtrm
- FTL = FTL
- O2 = O2
- Slugs = Снаряды
- Shuttle = Челнок
- Small Storage Crate = Малый ящик для хранения
- Small Table = Маленький столик
- Medium Tank = Средний резервуар
- Smelter = Плавильная печь
- Sofa = Диван
- Solar Panel = Солнечная панель
- Spacesuit = Космический скафандр
- Spacesuit Pod = Капсула для скафандра
- Stable Isotopes = Стабильные изотопы
- Stable Zeleon = Стабильный Зелеон
- Ladder = Лестница
- Stargate Actuator = Привод Звездных Врат
- Stargate Capacitor = Конденсатор Звездных Врат
- Stargate Receiver = Приемник Звездных Врат
- Stargate Resin = Смола Звездных Врат
- Stargate Frame = Рама Звездных Врат
- Storage Crate = Ящик для хранения
- Super Computer = Суперкомпьютер
- Table = Стол
- Huge Tank = Огромный резервуар
- Telepathic Sensor Station = Телепатическая сенсорная станция
- Thruster = Маневровый двигатель
- Tiddlet = Тиддлет
- Tilium Ore = Тилиевая руда
- Small Tank = Малый резервуар
- Track = Конвейер
- Waste Water = Сточные воды
- Water = Вода
- Water Purifier = Очиститель воды
- Weapons Control Centre = Центр управления оружием
- Weapons Officer = Офицер
- Zeleon Energy Cell = Энергетическая ячейка Зелеона
- Zeleon Gas = Газ Зелеона

### ИТОГОВАЯ ЗАДАЧА:

Я буду отправлять файлы, проверяй их по порядку на соответствие инструкциям, если сомневаешься корректен ли перевод - уточни.
