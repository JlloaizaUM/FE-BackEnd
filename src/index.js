import app from './app'
import './firebase';

app.listen(app.get('port'), () => {
  console.log(`app listening on port ${app.get('port')}`)
});