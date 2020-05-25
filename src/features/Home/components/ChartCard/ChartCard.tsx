import ApexChart from 'apexcharts'
import Card from '../../../../components/Card';
import Chart from 'react-apexcharts';
import CommonCardText from '../../../../components/CommonCardText';
import FlexRow from '../../../../components/blocks/FlexRow';
import HelpIcon from '../../../../icons/help.svg';
import React from 'react';
import styled from 'styled-components';

const ChartCardContainer = styled(Card)`
  grid-area: chart;
  display: flex;
  flex-direction: column;
`;
const options: ApexChart.ApexOptions = {
  colors: ['#1070ca', '#ec4c47', '#f7d154'],
  labels: ['Na média', 'Acima da média', 'Abaixo da média'],
  legend: {
    itemMargin: {
      vertical: 5
    },
    formatter: (v, o) => {
      const percentage = `${o.w.config.series[o.seriesIndex]}%`;
      return v + ` <span class="percentageChart">${percentage}</span>`;
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      formatter: value => {
        return value + '%';
      },
    },
  },
};

const series = [60, 25, 15];

const ChartCard = () => {
  return (
    <ChartCardContainer>
      <FlexRow style={{ marginBottom: 30 }}>
        <CommonCardText style={{ marginRight: 6 }}>Preços - Dryve x KBB</CommonCardText>
        <img src={HelpIcon} />
      </FlexRow>
      <div>
        <Chart options={options} series={series} type="donut" height="100%" width="100%" />
      </div>
    </ChartCardContainer>
  );
};

export default ChartCard;
