export class PersianDate extends Date
{
  getParts = (): string[] => this.toLocaleDateString('fa-IR-u-nu-latn').split('/');
  getDay = (): number => super.getDay() === 6 ? 0 : super.getDay() + 1;
  getDate = (): number => parseInt(this.getParts()[2]);
  getMonth = (): number => parseInt(this.getParts()[1]) - 1;
  getLastDayOfMonth = (): number =>
  {
    const month = this.getMonth();
    if (month <= 5) { return 31; }
    if (month <= 10) { return 30; }
    if ([30, 26, 22, 17, 13, 9, 5, 1].includes(this.getYear() % 33))
    {
      return 30;
    }
    else
    {
      return 29;
    }
  };

  getYear = (): number => parseInt(this.getParts()[0]);
  getMonthName = (): string => this.toLocaleDateString('fa-IR', { month: 'long' });
  getDayName = (): string => this.toLocaleDateString('fa-IR', { weekday: 'long' });
}
