import "./style.css";

console.log("Hello Typescript!");

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 1
// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

/*
  const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  const resultado: Pacientes[] = []; 

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      resultado.push(pacientes[i]); 
    }
  }

  return resultado; 
};


const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);


  
// Apartado 1
// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  const resultado: Pacientes[] = []; 

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      resultado.push(pacientes[i]); 
    }
  }

  return resultado; 
};

const pacientesPediatriaMenores = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(pacientesPediatriaMenores);


// Apartado 2
// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProctolo = true;
      break; 
    }
  };

  return activarProctolo;
};

const protocoloActivado = activarProtocoloUrgencia(pacientes);
console.log(protocoloActivado);

// Apartado 3
// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesReasignados: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      
      pacientesReasignados.push({ ...pacientes[i], especialidad: "Medico de familia" });
    } else {
      
      pacientesReasignados.push(pacientes[i]);
    }
  }

  return pacientesReasignados;
};


const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log(pacientesReasignados);

// Apartado 4
// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  // Tu implementación aquí :)
  let hayPacientes = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      hayPacientes = true;
      break; 
    }
  }

  return hayPacientes;
};

const hayPacientesDePediatria = HayPacientesDePediatria(pacientes);
console.log(hayPacientesDePediatria);


// Apartado 5
// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  // Tu implementación aquí :)
  let contador: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  };

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      contador.pediatria++;
    } else if (pacientes[i].especialidad === "Medico de familia") {
      contador.medicoDeFamilia++;
    } else {
      contador.cardiologia++;
    }
  }

  return contador;

};

const pacientesPorEspecialidad = cuentaPacientesPorEspecialidad(pacientes);
console.log(pacientesPorEspecialidad);
*/



//------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//
// ARRAY METHODS
// Apartado 1
// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter(paciente => paciente.especialidad === "Pediatra");
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2
// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = pacientes.some(
    paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3
// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.map(paciente => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    } else {
      return paciente;
    }
  });
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4
// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(paciente => paciente.especialidad === "Pediatra");
};

console.log(HayPacientesDePediatria(pacientes)); 

// Apartado 5
// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (contador, paciente) => {
      if (paciente.especialidad === "Medico de familia") {
        contador.medicoDeFamilia++;
      } else if (paciente.especialidad === "Pediatra") {
        contador.pediatria++;
      } else if (paciente.especialidad === "Cardiólogo") {
        contador.cardiologia++;
      }
      return contador;
    },
    { medicoDeFamilia: 0, pediatria: 0, cardiologia: 0 }
  );
};

console.log(cuentaPacientesPorEspecialidad(pacientes));