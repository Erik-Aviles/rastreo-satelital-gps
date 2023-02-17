export const inicialDataDevice = [
  {
    id: 1,
    placa: "AEI123",
    marca: "Mazda",
    modelo: "1988",
    imei: "12345678",
    dateSuscription: " 23-01-24 12:30",
    crawlStatuses: {
      hours: "1234 h 11 m",
      odometer: "1234 km",
      departureAddress: "Av. Walter AndraDe",
      arrivalAddress: "Av. Jaime Roldoz",
      state: "En movimiento",
      starTime: " 23-01-24 12:30",
      endTime: "23-01-24 14:00:11",
      totalDistance: "5000 km",
      blocked: false,
      velocity: "60 km",
      duration: "02:30",
      latitude: "1,774",
      longitude: "2,774",
      distance: "24 km/h",
      period: ["Hoy", "Ayer", "Semana actual", "Ultimo mes"],
    },
  },
  {
    id: 2,
    placa: "BCD456",
    marca: "Toyota",
    modelo: "2000",
    imei: "987654321",
    dateSuscription: "02-05-23 10:20",
    crawlStatuses: {
      currentData: {
        currentAddress: "Av. Walter Andrade",
        departureAddress: "Parroquia Los Guayacanes",
        arrivalAddress: "Parroquia San Camilo",
        state: "Agado",
        starTime: " 22-02-24 11:00",
        endTime: "22-02-24 16:00",
        blocked: true,
        velocity: "60 km",
        position: { latitude: "-0,8894", longitude: "0,2323" },
        duration: "4 h",
        distance: "24 km",
      },
      dataHistory: {
        hours: "5432 h 40 m",
        odometer: "5432 km",
      },
      // totalDistance: "20 km",
      period: ["Hoy", "Ayer", "Semana actual", "Ultimo mes"],
    },
  },
];
