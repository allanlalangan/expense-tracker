import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = months.map((month, index) => {
    return {
      label: month,
      id: index,
      value: props.data.filter(
        (expense) =>
          expense.date.toLocaleString("en-US", { month: "short" }) === month
      ).length,
      maxValue: props.data.length,
    };
  });

  return <Chart dataPoints={chartData} />;
};

export default ExpensesChart;
