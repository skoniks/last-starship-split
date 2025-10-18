### ОПИСАНИЕ ЗАДАЧИ:

Пользователь работает над переводом `.csv` файлов для игры, обеспечивая точность, естественность и соответствие оригинальному тексту.

### Инструкции:

**Инструкции для работы:**

- Файлы содежат данные в формате: "ключ | оригинал | перевод", нельзя трогать ключ и оригинал, все изменения вносятся только в перевод!
- Обращение к игроку должно быть вежливым, заменяя "ты/тебя/твой" на "вы/вас/ваш"
- Оригинальный текст может содержать двойные пробелы, переносы строк, HTML теги, маркеты (S*X, $*X, L*X, R*X), клавиши управления {ToggleMap} - все это должно быть сохранено в переводе (содержимое HTML тегов нужно перевести).
- Стиль перевода должен соответствовать соответствует оригинальному тексту.
- Названия объектов, построек, предметов и т.п. единые и согласованные.
- Использовать только термины из словаря наименований, если термин отсутствует в словаре - уточни у меня информацию.
- Eсли перевод уже корректный и соответствует правилам — не вноси изменений.
- Если не уверен в переводе - ничего не меняй и уточни у меня информацию.

**Пример корректного перевода:**

- Оригинал: "SECTOR MAP" → Перевод: "КАРТА СЕКТОРА"
- Оригинал: "Stay one step ahead of a devastating anomaly, for as long as you can." → Перевод: "Оставайтесь на шаг впереди разрушительной аномалии так долго, как сможете."
- Оригинал: "Set Smelter to Scrap Metal" → Перевод: "Настроить Плавильную Печь на переработку Металлолома"
- Оригинал: "Hovering the mouse over the current system will reveal the radius around the system that is being scanned and the scan's progress toward finding new points of interest.\n\nOpen the <b>SECTOR MAP</b> and click <b>NEXT</b> to speed-up the survey." → Перевод: "Наведя курсор на текущую систему, вы увидите радиус вокруг сканируемой системы и прогресс сканирования в поиске новых точек интереса.\n\nОткройте <b>КАРТУ СЕКТОРА</b> и нажмите <b>ДАЛЕЕ</b>, чтобы ускорить исследование."

**Особые правила:**

- STEAM CLOUD - ОБЛАКО STEAM
- STEAM WORKSHOP - МАСТЕРСКАЯ STEAM
- STARGATE = ЗВЕЗДНЫЕ ВРАТА (когда упоминается как объект или название)
- GREEN TEAM/RED TEAM в контексте арены - это команды игроков (не экипаж корабля)
- Crew = Экипаж (члены экипажа корабля)
- Team = Команда (группа в играх/соревнованиях)
- Black Box Flight Recorder = Бортовой Самописец (Black Box - не переводится)
- Не переводить названия кораблей если отсутствует термин в контексте

### СЛОВАРЬ НАИМЕНОВАНИЙ:

Вот список основных названий объектов:

- Airduct = Воздуховод
- Air Reprocessor = Редуктор Воздуха
- Assembly Table = Сборочный Стол
- Asteroid = Астероид
- Battery = Батарея
- Box = Ящик
- Hop Drive = Скачковый Двигатель
- Broken Hop Drive = Сломанный Скачковый Двигатель
- Bullets = Пулеметные Патроны
- Cannon = Пушка
- Cannon Shells = Пушечные Снаряды
- CO2 = CO2
- Cargo = Груз
- Chair = Стул
- Charged Crystal = Заряженный Кристалл
- Chemical Lab = Химическая Лаборатория
- Civilian = Гражданский
- Energy Coil = Катушка Энергии
- Comet = Комета
- Compost = Компост
- Copper Ingot = Медный Слиток
- Copper Minerals = Медная Руда
- Crew = Экипаж
- Data = Данные
- Deflector = Дефлектор
- Deuterium = Дейтерий
- Docking Port = Стыковочный Порт
- Door = Дверь
- Drone Bay = Отсек Для Дронов
- Empty Compute Grid = Пустая Вычислительная Сеть
- Empty Crystal = Пустой Кристалл
- Energy Cell = Энергетическая Ячейка
- Energy Cell Frame = Каркас Энергетической Ячейки
- Energy Transmitter = Передатчик Энергии
- Engine = Двигатель
- Entity = Сущность
- Equipment = Оборудование
- Explosives = Взрывчатка
- Fabricator = Фабрикатор
- Fighter = Истребитель
- Flight Recorder = Бортовой Самописец
- Food = Еда
- Frame = Рама
- FTL Charge = Гипертопливо
- FTL Drive = Гипердвигатель
- Fuel = Топливо
- Fuel Loader = Погрузчик Топлива
- Fusion Reactor = Реактор Синтеза
- Gas Collector = Газосборник
- Gatling Gun = Пулемет
- Generator = Генератор
- Hull Breach = Пролом Корпуса
- Hydroponic Garden = Гидропонный Сад
- Hyperspace Scoop = Гиперпространственный Совок
- Hyperspace Isotopes = Гиперпространственные Изотопы
- Hyperspace Sensor = Гиперпространственный Сенсор
- Hyperspace Sensor LR = Гиперпространственный Сенсор LR
- Water Ice = Водяной Лед
- Ice Grinder = Измельчитель Льда
- Laser Infuser = Лазерный Инфузор
- Lens = Объектив
- Lightning Rod = Громоотвод
- Loader = Погрузчик
- Logistics Drone = Логистический Дрон
- Metal Ingot = Железный Слиток
- Metallic Minerals = Железная Руда
- Meteor = Метеор
- Metreon Gas = Газ Метреона
- Mineral Patch = Месторождение Минералов
- Mining Laser = Шахтерский Лазер
- Mission Cargo = Груз Миссии
- Motor = Двигатель
- Munitions Bench = Верстак Боеприпасов
- Neubidium Capacitor = Нейбидиумный Конденсатор
- Neubidium Ingot = Нейбидиумный Слиток
- Neubidium Ore = Нейбидиумная Руда
- NoType = Неопознанный
- Ordnance = Боеприпасы
- Oxygen = Кислород
- Oxygen Loader = Погрузчик Кислорода
- Oxygen Maker = Генератор Кислорода
- Pot Plant = Горшочное Растение
- Power Coil = Катушка Питания
- Charged Power Coil = Заряженная Катушка Питания
- Power Injector = Инжектор Питания
- Precious Metals = Драгоценные Металлы
- Precious Ore = Драгоценная Руда
- Processor = Процессор
- Mine = Шахта
- Quantum Compute Grid = Квантовая Вычислительная Сеть
- Quantum Processor = Квантовый Процессор
- Quantum Wafer = Квантовая Пластина
- Radiation Blocker = Блокатор Радиации
- Radiation Emitter = Излучатель Радиации
- Railgun = Рельсотрон
- Railgun Slugs = Рельсовые Пули
- Reactor = Реактор
- Refined Metreon = Обработанный Метреон
- Tilium Crystals = Тилиевые Кристаллы
- Refinery = Химический Завод
- Refugee = Беженец
- Repair Structural Damage = Ремонт Структурных Повреждений
- Research Credit = Кредит На Исследования
- Robot Arm = Рука Робота
- Short Robot Arm = Короткая Рука Робота
- Smart Robot Arm = Умная Рука Робота
- Ruined Equipment = Разрушенное Оборудование
- Science Station = Научная Станция
- Scientist = Ученый
- Scrap Metal = Металлолом
- CO2 Scrubber = Скруббер CO2
- Seeds = Семена
- Sewage = Отходы Канализации
- Waste Treatment Machine = Переработчик Отходов
- Sewage Pipe = Канализационная Труба
- Shielded Canister = Экранированная Канистра
- Shielded Zeleon = Экранированный Зелеон
- Ship Wreckage = Обломки Корабля
- Ammo = Патроны
- Shells = Снаряды
- Dtrm = Дейтерий
- FTL = Гипертопливо
- O2 = Кислород
- Slugs = Пули
- Shuttle = Челнок
- Small Storage Crate = Малое Хранилище
- Small Table = Маленький Столик
- Medium Tank = Средний Резервуар
- Smelter = Плавильная Печь
- Sofa = Диван
- Solar Panel = Солнечная Панель
- Spacesuit = Космический Скафандр
- Spacesuit Pod = Капсула Для Скафандра
- Stable Isotopes = Стабильные Изотопы
- Stable Zeleon = Стабильный Зелеон
- Ladder = Лестница
- Stargate Actuator = Привод Звездных Врат
- Stargate Capacitor = Конденсатор Звездных Врат
- Stargate Receiver = Приемник Звездных Врат
- Stargate Resin = Смола Звездных Врат
- Stargate Frame = Рама Звездных Врат
- Storage Crate = Хранилище
- Super Computer = Суперкомпьютер
- Table = Стол
- Huge Tank = Огромный Резервуар
- Telepathic Sensor Station = Телепатическая Сенсорная Станция
- Thruster = Маневровый Двигатель
- Tiddlet = Тиддлет
- Tilium Ore = Тилиевая Руда
- Small Tank = Малый Резервуар
- Track = Конвейер
- Splitter = Разделитель
- Warp Alignment Computer = Компьютер Выравнивания Искривления
- Waste Water = Сточные Воды
- Water = Вода
- Water Purifier = Очиститель Воды
- Weapons Control Centre = Центр Управления Оружием
- Weapons Officer = Оружейный Офицер
- Zeleon Energy Cell = Энергетическая Ячейка Зелеона
- Zeleon Gas = Газ Зелеона

### ИТОГОВАЯ ЗАДАЧА:

Я буду отправлять файлы, проверяй их по порядку на соответствие инструкциям. Отвечай на русском языке!
