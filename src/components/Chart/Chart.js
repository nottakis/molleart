
import React from 'react';
import styles from './styles.module.scss';

import { Bar } from '@nivo/bar'

const keys = ['Alice', 'Bob', 'Cathy', 'Darren', 'Emily', 'Frank']
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: [{ 'Alice': 80, 'Bob': 80, 'Cathy': 80, 'Darren': 80, 'Emily': 80, 'Frank': 80 }],
  indexBy: 'country',
  keys,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}

function Chart() {
  return (
    <div className="container">
      <Bar
        {...commonProps}
        axisLeft={{
            format: value =>
                `$${Number(value).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                })}`,
        }}
        tooltipFormat={value =>
            `$${Number(value).toLocaleString('en-US', {
                minimumFractionDigits: 0,
            })}`
        }
      />
    </div>
  );
}

export default Chart;
