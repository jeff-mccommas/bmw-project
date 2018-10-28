import { RentalModule } from './shared/rental.module';

describe('RentalModule', () => {
  let rentalModule: RentalModule;

  beforeEach(() => {
    rentalModule = new RentalModule();
  });

  it('should create an instance', () => {
    expect(rentalModule).toBeTruthy();
  });
});
