'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class Workout {
    date = new Date();
    id = (new Date() + '').slice(-10);

    constructor(coords,distance,duration) {
        // this.date = ...
        // this.id = ...
        this.coords = coords
        this.distance = distance
        this.duration = duration
    }
}

class Running extends Workout{
    type = 'running'

    constructor(coords,distance,duration,cadence) {
        super(coords,distance,duration)
        this.cadence = cadence
        this.calcPace()
    }
    calcPace(){
        this.pace = this.duration / this.distance
        return this.pace
    }
}
class Cycling extends Workout{
    type = 'cycling'

    constructor(coords,distance,duration,elevationGain) {
        super(coords,distance,duration)
        this.elevationGain = elevationGain
        this.calcSpeed()
    }
    calcSpeed(){
        this.pace = this.distance / (this.duration / 60);
        return this.speed;
    }
}


class App {
    #map
    #mapEvent
    #workouts = [];

    constructor() {
        this._getPosition()
        form.addEventListener('submit', this._newWorkout.bind(this))
        inputType.addEventListener('change', this._toggleElevationField.bind(this))
    }

    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
                function () {
                    alert(`Could not get your position`)
                }
            )
    }

    _loadMap(position) {
        const {latitude, longitude} = position.coords
        console.log(latitude, longitude)
        console.log(`https://www.google.com/maps/@${latitude},${longitude},11z?entry=ttu`)

        const coords = [latitude, longitude]

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
                '&copy;<a href="https://www.baidu.com"></a>'
        }).addTo(this.#map)

        this.#map.on('click', this._showForm.bind(this))
    }

    _showForm(mapE) {
        this.#mapEvent = mapE
        form.classList.remove('hidden')
        inputDistance.focus()
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    _newWorkout(e) {
        e.preventDefault()

        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat,lng} = this.#mapEvent.latlng;
        let workout;

        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));

        if(type === 'running'){
            const cadence = +inputCadence.value

            if(
                // !Number.isFinite(distance) ||
                // !Number.isFinite(duration) ||
                // !Number.isFinite(cadence)
                !validInputs(distance, duration, cadence)
            )
                return alert(`Inputs have to be positive numbers!`)

            workout = new Running([lat,lng],distance,duration,cadence)
        }

        if(type === 'cycling'){
            const elevation = +inputElevation.value

            if(!validInputs(distance, duration, elevation))
                return alert(`Inputs have to be positive numbers!`)

            workout = new Cycling([lat,lng],distance,duration,elevation)

        }

        this.#workouts.push(workout)

        // console.log(this.#mapEvent)
        this._renderWorkoutMarker(workout)

        this._renderWorkout(workout)


//        inputDistance.value =
    }

    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                })
            )
            .setPopupContent('Workout')
            .openPopup();
    }

    _renderWorkout(workout){

    }

}

const app = new App()

















