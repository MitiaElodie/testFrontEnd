<template>
    <div class="information-event-container">
        <div class="event-title">
            <h2>{{ modifiableEvent.title }}</h2>
            <p class="information-event-info">Cree le {{ date }}  à {{ time }} par {{ event.createdBy }}</p>
        </div>
        <div class="event-element">
            <div class="information-event-form">
                <label for="title">Titre</label>
                <input type="text" v-model="modifiableEvent.title" id="title" name="title" />
            </div>
            
            <div class="information-event-form">
                <label for="description">Description</label>
                <textarea type="text" v-model="modifiableEvent.description" name="description" id="description" />
            </div>

            <div class="information-event-form-date-time">
                <div class="information-event-date">
                    <label for="date">Date</label>
                    <input type="date" id="date" name="date" :value="date" disabled="true"/>
                </div>
                
                <div class="information-event-time">
                    <label for="time">Heure</label>
                    <input type="time" id="time" name="time" :value="time" disabled="true"/>
                </div>
                
            </div>

            <div class="information-event-form">
                <label for="status">Nom du statut</label>
                <select name="status" id="status" v-model="modifiableEvent.statusName">
                    <option v-for="item in status" :key="item" :value="item">{{ item }}</option>
                </select>
            </div>

            <div class="information-event-form">
                <label for="employee">Employé impliqué</label>
                <select name="employee" id="employee" v-model="modifiableEvent.involvedEmployeeId">
                    <option v-for="item in employees" :key="item.id" :value="item.id">{{ getFullname(item)}}</option>
                </select>
            </div>

            <div class="information-event-form">
                <label for="witness">Temoin</label>
                <ul>
                    <li v-for="item in modifiableEvent.Témoins" :key="item">{{ item }} <i class="fa fa-close" v-on:click="deleteWitness(item)"></i></li>
                </ul>
                <input type="text" id="witness" name="witness" v-on:keyup.enter="addWitness" v-model="witnessName">
            </div>

            <div class="information-event-form">
                <input type="submit" class="submit-button" value="Modifier" @click="modify">
            </div>
        </div>
    </div>
</template>

<style>
    @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    .information-event-form, .information-event-form-date-time{
        margin: 20px;

    }
    
    .information-event-container{
        width: 450px;
        font-size: 0.9em;;
    }

    label{
        display: block;
    }

    .information-event-form-date-time{
        display: flex;
    }

    .information-event-time{
        margin-left: 30px;
    }

    .information-event-form ul{
        list-style: none;
        margin-top: 5px;;
        padding: 0;
    }

    .information-event-form li{
        display: inline;
        background-color: #c6ecd9;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
    }

    .submit-button{
        padding: 10px;
    }

    
</style>

<script>
    import { mapState } from 'vuex' 
    export default{
        name: 'InformationEvent',
        props: {
            idEvent: Number,
        },
        data(){
            return{
                witnessName: "",
                listWitness: [],
                actualId: this.idEvent,
                modifiableEvent: null,
            }
        },
        beforeMount(){
            this.modifiableEvent = JSON.parse(JSON.stringify(this.event)); // pour enlever le lien entre this.event et this.modifiableEvents
            this.event.Témoins.forEach(element => {
                    this.listWitness.push(element);
                });
        },
        watch: {
            '$route.params.id'(to, from){
                this.actualId = to;
                this.modifiableEvent = JSON.parse(JSON.stringify(this.event));
                this.listWitness = [],
                this.event.Témoins.forEach(element => {
                    this.listWitness.push(element);
                });
            }
        },
        computed: {
            event() {
                return this.$store.getters.getEvent(Number(this.actualId));
            },
            date() {
                return this.$store.getters.getDate(this.event.creationDate);
            },

            time(){
                return this.$store.getters.getTime(this.event.creationDate);
            },

            ...mapState(['status', 'employees']),
        },
        
        methods: {
            getFullname(e) {
                return `${ e.firstname } ${ e.lastname }`;
            },

            addWitness(){
                this.modifiableEvent.Témoins.push(this.witnessName);
                this.witnessName = ""; // on reinitialise le nom du temoin
            },

            deleteWitness(item){
                let index = this.modifiableEvent.Témoins.indexOf(item);
                this.modifiableEvent.Témoins.splice(index, 1);
            },

            modify(){
                console.log("PUT route/event/"+ this.actualId + " et envoyer les données dans this.modifiableEvent");
                let payload = { "idEvent" : this.actualId, "newEvent" : this.modifiableEvent}
                this.$store.commit('MODIFY_EVENT', payload);
            }
        }
    }

</script>