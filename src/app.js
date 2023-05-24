import React from 'react';
import ReactDOM from 'react-dom';

import { ResponsiveLine } from '@nivo/line';
import './app.css';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const MyResponsiveLine = ( { data /* see data tab */ } ) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)


var data = [
    {
      "id": "japan",
      "color": "hsl(302, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 11
        },
        {
          "x": "helicopter",
          "y": 50
        },
        {
          "x": "boat",
          "y": 181
        },
        {
          "x": "train",
          "y": 137
        },
        {
          "x": "subway",
          "y": 194
        },
        {
          "x": "bus",
          "y": 108
        },
        {
          "x": "car",
          "y": 193
        },
        {
          "x": "moto",
          "y": 162
        },
        {
          "x": "bicycle",
          "y": 274
        },
        {
          "x": "horse",
          "y": 92
        },
        {
          "x": "skateboard",
          "y": 58
        },
        {
          "x": "others",
          "y": 244
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(175, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 206
        },
        {
          "x": "helicopter",
          "y": 35
        },
        {
          "x": "boat",
          "y": 128
        },
        {
          "x": "train",
          "y": 222
        },
        {
          "x": "subway",
          "y": 280
        },
        {
          "x": "bus",
          "y": 19
        },
        {
          "x": "car",
          "y": 188
        },
        {
          "x": "moto",
          "y": 274
        },
        {
          "x": "bicycle",
          "y": 160
        },
        {
          "x": "horse",
          "y": 187
        },
        {
          "x": "skateboard",
          "y": 289
        },
        {
          "x": "others",
          "y": 260
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(142, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 115
        },
        {
          "x": "helicopter",
          "y": 282
        },
        {
          "x": "boat",
          "y": 137
        },
        {
          "x": "train",
          "y": 219
        },
        {
          "x": "subway",
          "y": 136
        },
        {
          "x": "bus",
          "y": 106
        },
        {
          "x": "car",
          "y": 50
        },
        {
          "x": "moto",
          "y": 85
        },
        {
          "x": "bicycle",
          "y": 199
        },
        {
          "x": "horse",
          "y": 282
        },
        {
          "x": "skateboard",
          "y": 182
        },
        {
          "x": "others",
          "y": 124
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(15, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 185
        },
        {
          "x": "helicopter",
          "y": 212
        },
        {
          "x": "boat",
          "y": 139
        },
        {
          "x": "train",
          "y": 1
        },
        {
          "x": "subway",
          "y": 36
        },
        {
          "x": "bus",
          "y": 35
        },
        {
          "x": "car",
          "y": 183
        },
        {
          "x": "moto",
          "y": 182
        },
        {
          "x": "bicycle",
          "y": 78
        },
        {
          "x": "horse",
          "y": 275
        },
        {
          "x": "skateboard",
          "y": 153
        },
        {
          "x": "others",
          "y": 242
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(326, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 168
        },
        {
          "x": "helicopter",
          "y": 281
        },
        {
          "x": "boat",
          "y": 141
        },
        {
          "x": "train",
          "y": 270
        },
        {
          "x": "subway",
          "y": 220
        },
        {
          "x": "bus",
          "y": 152
        },
        {
          "x": "car",
          "y": 30
        },
        {
          "x": "moto",
          "y": 198
        },
        {
          "x": "bicycle",
          "y": 12
        },
        {
          "x": "horse",
          "y": 243
        },
        {
          "x": "skateboard",
          "y": 242
        },
        {
          "x": "others",
          "y": 107
        }
      ]
    }
  ];


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyResponsiveLine data={data} />);