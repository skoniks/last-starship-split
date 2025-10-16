const { readFileSync, write, writeFileSync } = require('node:fs');

const t = `Airduct | Воздуховод
Air Reprocessor | Редуктор Воздуха
Assembly Table | Сборочный Стол
Asteroid | Астероид
Battery | Батарея
Box | Ящик
Broken Hop Drive | Сломанный Хоп-Драйв
Bullets | Пулеметные Патроны
Cannon | Пушка
Cannon Shells | Пушечные Снаряды
CO2 | CO2
Cargo | Груз
Chair | Стул
Charged Crystal | Заряженный Кристалл
Chemical Lab | Химическая Лаборатория
Civilian | Гражданский
Energy Coil | Катушка Энергии
Comet | Комета
Compost | Компост
Copper Ingot | Медный Слиток
Copper Minerals | Медная Руда
Crew | Экипаж
Data | Данные
Deflector | Дефлектор
Deuterium | Дейтерий
Docking Port | Стыковочный Порт
Door | Дверь
Drone Bay | Отсек Для Дронов
Empty Compute Grid | Пустая Вычислительная Сеть
Empty Crystal | Пустой Кристалл
Energy Cell | Энергетическая Ячейка
Energy Cell Frame | Каркас Энергетической Ячейки
Energy Transmitter | Передатчик Энергии
Engine | Двигатель
Entity | Сущность
Equipment | Оборудование
Explosives | Взрывчатка
Fabricator | Фабрикатор
Fighter | Истребитель
Flight Recorder | Бортовой Самописец
Food | Еда
Frame | Рама
FTL Charge | Сверхсветовой Заряд
FTL Drive | Сверхсветовой Привод
Fuel | Топливо
Fuel Loader | Погрузчик Топлива
Fusion Reactor | Реактор Синтеза
Gas Collector | Газосборник
Gatling Gun | Пулемет
Generator | Генератор
Hull Breach | Пролом Корпуса
Hydroponic Garden | Гидропонный Сад
Hyperspace Scoop | Гиперпространственный Совок
Hyperspace Isotopes | Гиперпространственные Изотопы
Hyperspace Sensor | Гиперпространственный Датчик
Hyperspace Sensor LR | Гиперпространственный Датчик LR
Water Ice | Водяной Лед
Ice Grinder | Измельчитель Льда
Laser Infuser | Лазерный Инфузор
Lens | Объектив
Lightning Rod | Громоотвод
Loader | Погрузчик
Logistics Drone | Логистический Дрон
Metal Ingot | Железный Слиток
Metallic Minerals | Железная Руда
Meteor | Метеор
Metreon Gas | Газ Метреона
Mineral Patch | Месторождение Минералов
Mining Laser | Шахтерский Лазер
Mission Cargo | Груз Миссии
Motor | Двигатель
Munitions Bench | Верстак Боеприпасов
Neubidium Capacitor | Нейбидиумный Конденсатор
Neubidium Ingot | Нейбидиумный Слиток
Neubidium Ore | Нейбидиумная Руда
NoType | Неопознанный
Ordnance | Боеприпасы
Oxygen | Кислород
Oxygen Loader | Погрузчик Кислорода
Oxygen Maker | Генератор Кислорода
Pot Plant | Горшочное Растение
Power Coil | Катушка Питания
Charged Power Coil | Заряженная Катушка Питания
Power Injector | Инжектор Питания
Precious Metals | Драгоценные Металлы
Precious Ore | Драгоценная Руда
Processor | Процессор
Mine | Шахта
Quantum Compute Grid | Квантовая Вычислительная Сеть
Quantum Processor | Квантовый Процессор
Quantum Wafer | Квантовая Пластина
Radiation Blocker | Блокатор Радиации
Radiation Emitter | Излучатель Радиации
Railgun | Рельсотрон
Railgun Slugs | Рельсотронные Снаряды
Reactor | Реактор
Refined Metreon | Рафинированный Метреон
Tilium Crystals | Тилиевые Кристаллы
Refinery | Химический Завод
Refugee | Беженец
Repair Structural Damage | Ремонт Структурных Повреждений
Research Credit | Кредит На Исследования
Robot Arm | Рука Робота
Short Robot Arm | Короткая Рука Робота
Smart Robot Arm | Умная Рука Робота
Ruined Equipment | Разрушенное Оборудование
Science Station | Научная Станция
Scientist | Ученый
Scrap Metal | Металлолом
CO2 Scrubber | Скруббер CO2
Seeds | Семена
Sewage | Отходы Канализации
Waste Treatment Machine | Переработчик Отходов
Sewage Pipe | Канализационная Труба
Shielded Canister | Экранированная Канистра
Shielded Zeleon | Экранированный Зелеон
Ship Wreckage | Обломки Корабля
Ammo | Патроны
Shells | Снаряды
Dtrm | Dtrm
FTL | FTL
O2 | O2
Slugs | Снаряды
Shuttle | Челнок
Small Storage Crate | Малое Хранилище
Small Table | Маленький Столик
Medium Tank | Средний Резервуар
Smelter | Плавильная Печь
Sofa | Диван
Solar Panel | Солнечная Панель
Spacesuit | Космический Скафандр
Spacesuit Pod | Капсула Для Скафандра
Stable Isotopes | Стабильные Изотопы
Stable Zeleon | Стабильный Зелеон
Ladder | Лестница
Stargate Actuator | Привод Звездных Врат
Stargate Capacitor | Конденсатор Звездных Врат
Stargate Receiver | Приемник Звездных Врат
Stargate Resin | Смола Звездных Врат
Stargate Frame | Рама Звездных Врат
Storage Crate | Хранилище
Super Computer | Суперкомпьютер
Table | Стол
Huge Tank | Огромный Резервуар
Telepathic Sensor Station | Телепатическая Сенсорная Станция
Thruster | Маневровый Двигатель
Tiddlet | Тиддлет
Tilium Ore | Тилиевая Руда
Small Tank | Малый Резервуар
Track | Конвейер
Splitter | Разделитель
Warp Alignment Computer | Компьютер Выравнивания Искривления
Waste Water | Сточные Воды
Water | Вода
Water Purifier | Очиститель Воды
Weapons Control Centre | Центр Управления Оружием
Weapons Officer | Оружейный Офицер
Zeleon Energy Cell | Энергетическая Ячейка Зелеона
Zeleon Gas | Газ Зелеона`
  .split('\n')
  .map((l) => l.split(' | '));

const result = [];
const keys = Object.fromEntries(t);
const content = readFileSync('./language/object.csv', 'utf8');
content.split('\n').forEach((line) => {
  if (!line.trim()) return;
  const [key, en, ru] = line.split(' | ');
  if (keys[en]) result.push([key, en, keys[en]]);
  else result.push([key, en, ru]);
});
writeFileSync(
  './language/object.csv',
  result.map((r) => r.join(' | ')).join('\n') + '\n',
  { encoding: 'utf8' },
);
