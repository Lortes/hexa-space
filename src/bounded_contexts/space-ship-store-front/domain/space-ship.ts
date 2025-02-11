export type SpaceShip = {
    id: string;
    name: string;
    price: number;
    location: string;
    image: string;
    mileage?: MileageInLightYears;
    speed?: number;
    constructionYear: number;
    claps?: number;
    onSale: boolean;
};

export type MileageInLightYears = number;

const INTEREST_RATE = 1.1;
export const DEFAULT_NUM_OF_MONTH = 12;

export const monthlyRate = (ship: SpaceShip, durationInMonth: number): number => {
    if (ship.onSale) {
        return (ship.price / durationInMonth)
    }
    return (ship.price / durationInMonth) * (1 + INTEREST_RATE / 12);
}
