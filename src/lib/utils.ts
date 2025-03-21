import {
  BodyType,
  Colour,
  CurrencyCode,
  FuelType,
  OdoUnit,
  Transmission,
  ULEZCompliance,
} from '@prisma/client';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FormatPriceArgs {
  price: number | null;
  currency: CurrencyCode | null;
}

export function formatUlezCompliance(ulezCompliance: ULEZCompliance) {
  return ulezCompliance === ULEZCompliance.EXEMPT ? 'Exempt' : 'Non-Exempt';
}

export function formatBodyType(bodyType: BodyType) {
  switch (bodyType) {
    case BodyType.CONVERTIBLE:
      return 'Convertible';
    case BodyType.COUPE:
      return 'Coupe';
    case BodyType.HATCHBACK:
      return 'Hatchback';
    case BodyType.SUV:
      return 'SUV';
    case BodyType.WAGON:
      return 'Wagon';
    case BodyType.SEDAN:
      return 'Sedan';
    default:
      return 'Unknown';
  }
}

export function formatPrice({ price, currency }: FormatPriceArgs) {
  if (!price) return '0';

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    ...(currency && { currency }),
    maximumFractionDigits: 0,
  });

  return formatter.format(price / 100);
}

export function formatNumber(
  num: number | null,
  options?: Intl.NumberFormatOptions
) {
  if (!num) return '0';

  return new Intl.NumberFormat('en-GB', options).format(num);
}

export function formatOdometerUnit(unit: OdoUnit) {
  return unit === OdoUnit.MILES ? 'mi' : 'km';
}

export function formatTransmission(transmission: Transmission) {
  return transmission === Transmission.AUTOMATIC ? 'Automatic' : 'Manual';
}

export function formatFuelType(fuelType: FuelType) {
  switch (fuelType) {
    case FuelType.PETROL:
      return 'Petrol';
    case FuelType.DIESEL:
      return 'Diesel';
    case FuelType.ELECTRIC:
      return 'Electric';
    case FuelType.HYBRID:
      return 'Hybrid';
    default:
      return 'Unknown';
  }
}

export function formatColour(colour: Colour) {
  switch (colour) {
    case Colour.BLACK:
      return 'Black';
    case Colour.WHITE:
      return 'White';
    case Colour.SILVER:
      return 'Silver';
    case Colour.RED:
      return 'Red';
    case Colour.BLUE:
      return 'Blue';
    case Colour.BROWN:
      return 'Brown';
    case Colour.GOLD:
      return 'Gold';
    case Colour.GREEN:
      return 'Green';
    case Colour.GREY:
      return 'Grey';
    case Colour.ORANGE:
      return 'Orange';
    case Colour.PINK:
      return 'Pink';
    case Colour.PURPLE:
      return 'Purple';
    case Colour.YELLOW:
      return 'Yellow';
    default:
      return 'Unknown';
  }
}
