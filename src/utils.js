const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MAX_BOOKING_DAYS = 7;

export const getDates = () => {
  const today = new Date();
  const dates = [];
  for (let i = -7; i <= MAX_BOOKING_DAYS; i++) {
    const date = new Date(today.getTime() + i * MS_PER_DAY);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

export const saveBooking = (date, session, seats) => {
  const key = `${date}-${session}`;
  localStorage.setItem(key, JSON.stringify(seats));
};

export const loadBookings = (date, session) => {
  const key = `${date}-${session}`;
  const bookings = localStorage.getItem(key);
  return bookings ? JSON.parse(bookings) : new Array(50).fill({ reserved: false });
};
