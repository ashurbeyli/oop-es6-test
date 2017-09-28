import {Vehicle} from './vehicle.js'

export class Drone extends Vehicle{
    constructor(license, mode, latLong){
        super(license, mode, latLong)
        this.airTimeHours = null
        this.base = null
    }
}