import { useState, useEffect } from "react";

const useDays = () => {
  const [days, setDaysState] = useState({});
  const [totalDays, setTotalDays] = useState(0);
  const [month, setMonth] = useState(0);

  useEffect(() => {
    // Função para retornar a data atual
    const setDays = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      // Setando
      setDaysState({
        dia: day,
        mes: month,
        ano: year,
      });
    };
    // Setando o mês para funções futuras
    setMonth(days.mes);
    // Chamar a função
    setDays();
  }, []); // Executa só uma vez

  useEffect(() => {
    if (days.ano && days.mes) {
      // Função para pegar a quantidade de dias no mês
      const getDayInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
      };
      //Função para retornar a quantidade de dias no mês
      const setTotalDaysFunction = (year, month) => {
        console.log("Ano e mês recebido:", year, month);
        const daysInaMaht = getDayInMonth(year, month);
        console.log("Quantidade de dias:", daysInaMaht);

        //Criar um array
        const daysArray = Array.from({ length: daysInaMaht }, (_, i) => i + 1);
        console.log(daysArray);
        setTotalDays(daysArray);
      };
      setTotalDaysFunction(days.ano, days.mes);
    }
    
  }, [month]);

  return {
    days,
    totalDays,
  };
};

export default useDays;
