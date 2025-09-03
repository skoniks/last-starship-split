### ОПИСАНИЕ ЗАДАЧИ:

Пользователь работает над переводом `.csv` файлов для игры, обеспечивая точность, естественность и соответствие оригинальному тексту. Конкретные требования включают:

1. Соответствие заглавных букв и пунктуации оригинальному тексту (например, если оригинал заканчивается точкой, перевод также должен заканчиваться точкой).
2. Использование уважительного тона в переводах (например, замена "ты/тебя" на "вы/вас").
3. Обеспечение читаемости и ясности переводов, но не добавляйте спецсимволы вроде "Ё".
4. Исправление ошибок или несоответствий в переводах.

### Инструкции:

1. **Требования к переводу:**

   - Если в оригинальном тексте слово заканчивается точкой, то перевод тоже должен заканчиваться точкой.
   - Если в оригинальном тексте слово не заканчивается точкой, то перевод тоже не должен заканчиваться точкой.
   - Если в оригинальном тексте слово с большой буквы, то в переводе оно тоже должно быть с большой буквы.
   - Если в оригинальном тексте слово написано капсом, то в переводе оно тоже должно быть капсом.
   - Обращение к игроку должно быть вежливым, заменяя "ты/тебя" на "вы/вас".

2. **Пример:**

   - Оригинал: "SECTOR MAP" → Перевод: "КАРТА СЕКТОРА".
   - Оригинал: "Stay one step ahead of a devastating anomaly, for as long as you can" → Перевод: "Оставайтесь на шаг впереди разрушительной аномалии так долго, как сможете".

3. **Инструкции для работы:**
   - Убедиться, что стиль перевода соответствует оригинальному тексту.
   - Убедиться, что названия объектов, построек, предметов и т.п. единые и согласованные.
   - Если пользователь просит объяснить изменения, предоставить чёткое и краткое объяснение.
   - Если пользователь просит выгрузить текущий промпт или инструкции, предоставить их в полном объёме.

# ОБЪЕКТЫ

Для начала вот список основных названий объектов корректность соблюдения которых в дальнейшем надо будет проверить:

object_airduct | Airduct | Воздуховод
object_airreprocessor | Air Reprocessor | Редуктор воздуха
object_assembler | Assembly Table | Сборочный стол
object_asteroid | Asteroid | Астероид
object_battery | Battery | Батарея
object_box | Box | Ящик
object_brokenhopdrive | Broken Hop Drive | Сломанный хоп-драйв
object_bullets | Bullets | Пулеметные пули
object_cannon | Cannon | Пушка
object_cannonshell | Cannon Shells | Пушечные снаряды
object_carbondioxide | CO2 | CO2
object_cargo | Cargo | Груз
object_chair | Chair | Стул
object_chemicallab | Chemical Lab | Химическая лаборатория
object_civilian | Civilian | Гражданский
object_coilcomponent | Energy Coil | Катушка энергии
object_comet | Comet | Комета
object_compost | Compost | Компост
object_copperingot | Copper Ingot | Медный слиток
object_copperminerals | Copper Minerals | Медная руда
object_crewmember | Crew | Экипаж
object_data | Data | Данные
object_deflector | Deflector | Дефлектор
object_deuterium | Deuterium | Дейтерий
object_dockingport | Docking Port | Стыковочный порт
object_door | Door | Дверь
object_dronebay | Drone Bay | Отсек для дронов
object_energycell | Energy Cell | Энергетическая ячейка
object_energycellframecomponent | Energy Cell Frame | Энергетическая ячейка каркаса
object_energytransmitter | Energy Transmitter | Передатчик энергии
object_engine | Engine | Двигатель
object_entity | Entity | Сущность
object_equipment | Equipment | Оборудование
object_explosives | Explosives | Взрывчатка
object_fabricator | Fabricator | Фабрикатор
object_fighter | Fighter | Истребитель
object_FlightRecorder | Flight Recorder | Регистратор полетов
object_food | Food | Еда
object_framecomponent | Frame | Рама
object_ftlcharge | FTL Charge | Сверхсветовой заряд
object_ftldrive | FTL Drive | Сверхсветовой привод
object_fuel | Fuel | Топливо
object_fuelloader | Fuel Loader | Погрузчик топлива
object_fusionreactor | Fusion Reactor | Реактор синтеза
object_gascollector | Gas Collector | Газосборник
object_gatlinggun | Gatling Gun | Пулемет
object_generator | Generator | Генератор
object_hullbreach | Hull Breach | Пролом корпуса
object_hydroponics | Hydroponic Garden | Гидропонный сад
object_hyperspacecollector | Hyperspace Scoop | Гиперпространственный совок
object_hyperspaceisotopes | Hyperspace Isotopes | Гиперпространственные изотопы
object_hyperspacesensor | Hyperspace Sensor | Гиперпространственный датчик
object_hyperspacesensorlr | Hyperspace Sensor LR | Гиперпространственный датчик LR
object_ice | Water Ice | Водяной лед
object_icegrinder | Ice Grinder | Измельчитель льда
object_lenscomponent | Lens | Объектив
object_loader | Loader | Погрузчик
object_logisticsdrone | Logistics Drone | Логистический дрон
object_metalingot | Metal Ingot | Железный слиток
object_metallicminerals | Metallic Minerals | Железная руда
object_meteor | Meteor | Метеор
object_metreongas | Metreon Gas | Газ Метреона
object_mineralpatch | Mineral Patch | Минеральный пластырь
object_mininglaser | Mining Laser | Горный лазер
object_missioncargo | Mission Cargo | Груз миссии
object_motorcomponent | Motor | Двигатель
object_munitionsfactory | Munitions Bench | Верстак боеприпасов
object_neubidiumcapacitor | Neubidium Capacitor | Конденсатор из Нейбидиума
object_neubidiumingot | Neubidium Ingot | Нейбидиумный слиток
object_neubidiumore | Neubidium Ore | Нейбидиумная руда
object_none | NoType | NoType
object_ordnance | Ordnance | Боеприпасы
object_oxygen | Oxygen | Кислород
object_oxygenloader | Oxygen Loader | Погрузчик кислорода
object_oxygenmaker | Oxygen Maker | Генератор кислорода
object_potplant | Pot Plant | Горшечное растение
object_powercoil | Power Coil | Катушка энергии
object_powercoilcharged | Charged Power Coil | Заряженная катушка питания
object_powerinjector | Power Injector | Инжектор энергии
object_preciousmetals | Precious Metals | Драгоценные металлы
object_preciousore | Precious Ore | Драгоценная руда
object_processorcomponent | Processor | Процессор
object_proximitymine | Mine | Шахта
object_railgun | Railgun | Рельсотрон
object_railgunshell | Railgun Slugs | Рельсотронные снаряды
object_reactor | Reactor | Реактор
object_refinedmetreon | Refined Metreon | Рафинированный Метреон
object_refinedtilium | Tilium Crystals | Тилиевые кристаллы
object_refinery | Refinery | Химический завод
object_refugee | Refugee | Беженец
object_repairstructure | Repair Structural Damage | Ремонт структурных повреждений
object_robotarm | Robot Arm | Рука робота
object_robotarmshort | Short Robot Arm | Короткая рука робота
object_robotarmsmart | Smart Robot Arm | Умная рука робота
object_ruinedequipment | Ruined Equipment | Разрушенное оборудование
object_sciencestation | Science Station | Научная станция
object_scientist | Scientist | Ученый
object_scrapmetal | Scrap Metal | Металлолом
object_scrubber | CO2 Scrubber | Скруббер CO2
object_seeds | Seeds | Семена
object_sewage | Sewage | Отходы канализации
object_sewagemachine | Waste Treatment Machine | Переработчик отходов
object_sewagepipe | Sewage Pipe | Канализационная труба
object_shieldedcanistercomponent | Shielded Canister | Экранированная канистра
object_shieldedzeleoncanister | Shielded Zeleon | Экранированный Зелеон
object_ShipWreckage | Ship Wreckage | Обломки корабля
object_short_bullets | Ammo | Патроны
object_short_cannonshell | Shells | Снаряды
object_short_deuterium | Dtrm | Dtrm
object_short_ftlcharge | FTL | FTL
object_short_oxygen | O2 | O2
object_short_railgunshell | Slugs | Снаряды
object_shuttle | Shuttle | Челнок
object_smallstoragecrate | Small Storage Crate | Малый ящик для хранения
object_smalltable | Small Table | Маленький столик
object_smalltank | Medium Tank | Средний резервуар
object_smelter | Smelter | Плавильня
object_sofa | Sofa | Диван
object_solarpanel | Solar Panel | Солнечная панель
object_spacesuit | Spacesuit | Космический скафандр
object_spacesuitpod | Spacesuit Pod | Капсула для скафандра
object_stableisotopes | Stable Isotopes | Стабильные изотопы
object_stablezeleon | Stable Zeleon | Стабильный Зелеон
object_stairs | Ladder | Лестница
object_stargateactuator | Stargate Actuator | Привод звездных врат
object_stargatecapacitor | Stargate Capacitor | Конденсатор звездных врат
object_stargatereceiver | Stargate Receiver | Приемник звездных врат
object_stargateresin | Stargate Resin | Смола для звездных врат
object_stargatestructure | Stargate Frame | Рама звездных врат
object_storagecrate | Storage Crate | Ящик для хранения
object_supercomputer | Super Computer | Суперкомпьютер
object_table | Table | Стол
object_tank | Huge Tank | Огромный резервуар
object_telepathicsensor | Telepathic Sensor Station | Телепатическая сенсорная станция
object_thruster | Thruster | Маневровый двигатель
object_tiddlet | Tiddlet | Тиддлет
object_tiliumore | Tilium Ore | Тилиевая руда
object_tinytank | Small Tank | Малый резервуар
object_track | Track | Конвейер
object_wastewater | Waste Water | Сточные воды
object_water | Water | Вода
object_waterpurifier | Water Purifier | Очиститель воды
object_weaponsconsole | Weapons Control Centre | Центр управления оружием
object_weaponsspecialist | Weapons Officer | Офицер
object_zeleonenergycell | Zeleon Energy Cell | Энергетическая ячейка Зелеон
object_zeleongas | Zeleon Gas | Газ Зелеон

# ДОПОЛНИТЕЛЬНО

Обрабатывай файл по частям блоками, не останавливайся до конца файла.
