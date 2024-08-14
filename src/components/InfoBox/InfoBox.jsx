import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import style from "./InfoBox.module.css"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const InfoBox = ({ info }) => {
  const IMG_URL = {
    "clear_sky": "https://media.istockphoto.com/id/1126610893/photo/paradise-sandy-beach-with-coco-palm.jpg?s=2048x2048&w=is&k=20&c=sZwpnfB1ybwfQbIXf_jauNJXVWoQoZMUcWMFkjS1iiA=",
    "cloudy": "https://media.istockphoto.com/id/522305524/photo/dramatic-stormy-dark-cloudy-sky-over-sea.jpg?s=1024x1024&w=is&k=20&c=lDQ_GsJBde7ECwyDFslD7BwnK423DieI_3GWPYMFNdM=",
    "rainy": "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=2048x2048&w=is&k=20&c=5-0cwKyftzKvHbxdXfJLyvV7Ijm0-lrB1DryXtJcpfg=",
    "thunderstorm": "https://images.unsplash.com/photo-1561553590-267fc716698a?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "snowy": "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "foggy": "https://images.unsplash.com/photo-1479476437642-f85d89e5ad7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }

  return (
    <div className={style.infoBox}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={
            (info.weather === "clear sky") ? IMG_URL.clear_sky
              : (info.weather.includes("clouds")) ? IMG_URL.cloudy
                : (info.weather.includes("rain") || info.weather.includes("drizzle")) ? IMG_URL.rainy
                  : (info.weather.includes("thunderstorm")) ? IMG_URL.thunderstorm
                    : (info.weather.includes("snow")) ? IMG_URL.snowy
                      : (info.weather.includes("mist") || info.weather.includes("haze")) ? IMG_URL.foggy
                        : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.ammonnews.net%2Farticle%2F43576&psig=AOvVaw2ohVhbMcerFIcN5bfy-eao&ust=1723734579606000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMia7dDh9IcDFQAAAAAdAAAAABAE"
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <strong style={{ fontSize: '1.5rem' }}>{info.weather}</strong>

              {info.weather === "clear sky" ?
                (<WbSunnyIcon style={{ marginLeft: '8px' }} />)
                : info.weather.includes("clouds") ?
                  (<WbCloudyIcon style={{ marginLeft: '8px' }} />)
                  : info.weather.includes("rain") || info.weather.includes("drizzle") ?
                    (<BeachAccessIcon style={{ marginLeft: '8px' }} />)
                    : info.weather.includes("thunderstorm") ?
                      (<ThunderstormIcon style={{ marginLeft: '8px' }} />)
                      : info.weather.includes("snow") ?
                        (<AcUnitIcon style={{ marginLeft: '8px' }} />)
                        : info.weather.includes("mist") || info.weather.includes("haze") ?
                          (<AcUnitIcon style={{ marginLeft: '8px' }} />)
                          : null}

            </div>
            <div>Temperature : {info.temp}&deg;C</div>
            <div>Range : {info.tempMin}&deg;C - {info.tempMax}&deg;C</div>
            <div>Humidity : {info.humidity}</div>
            <div>Pressure : {info.pressure}</div>
            <div>Can be described as <i>{info.weather.toLowerCase()}y</i> weather and feels like {info.feels_like}&deg;C</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default InfoBox
