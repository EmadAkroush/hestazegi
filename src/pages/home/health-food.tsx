import React, { Component } from 'react';
import type { ReactElement } from 'react';
import { Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';

import '../../style/health-food.css';

type PropListType = Record<string, unknown>;

interface StateListType extends Record<string, unknown>
{

}

export class Healthfood extends Component<PropListType, StateListType>
{
  constructor(props: PropListType)
  {
    super(props);
    this.state = {

    };
  }

  render(): ReactElement
  {
    return (<div className='health-food'>
            <div className="top">
                <Typography component="p" className='top-text' >
                    تغذیه سلامت
                </Typography>
            </div>
            <div className="health-food-body">
                <Grid container spacing={2}>
                    <div className='inside-container'>
                    <Grid item md={2} sm={4} xs={4}>
                        <Card className='health-card'>
                            <img src=".\assets\img\health1.png" alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="p" className='health-card-p'>
                                    شاغلان
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item md={2} sm={4} xs={4}>
                        <Card className='health-card'>
                        <img src=".\assets\img\health2.png" alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="p" className='health-card-p'>
                                    سالمندان
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item md={2} sm={4} xs={4}>
                    <Card className='health-card'>
                        <img src=".\assets\img\health3.png" alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="p" className='health-card-p'>
                                  دانش آموزان
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item md={2} sm={4} xs={4}>
                    <Card className='health-card'>
                        <img src=".\assets\img\health4.png" alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="p" className='health-card-p'>
                                  گیاهخواران
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item md={2} sm={4} xs={4}>
                    <Card className='health-card'>
                        <img src=".\assets\img\health5.png" alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="p" className='health-card-p'>
                                  سریع
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item md={2} sm={4} xs={4}>
                    <Card className='health-card'>
                        <img src=".\assets\img\health6.png" alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="p" className='health-card-p'>
                                 رایگان
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                    </div>
                </Grid>

            </div>
        </div>);
  }
}
