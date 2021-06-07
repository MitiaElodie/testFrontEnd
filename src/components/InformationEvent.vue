<template>
    <div class="information-event-container">
        <div class="event-title">
            <h2>{{ event.title }}</h2>
            <p class="information-event-info">Cree le {{ date }}  à {{ time }} par {{ event.createdBy }}</p>
        </div>
        <div class="event-element">
            <div class="information-event-form">
                <label for="title">Titre</label>
                <input type="text" :value="event.title" id="title" name="title" />
            </div>
            
            <div class="information-event-form">
                <label for="description">Description</label>
                <textarea type="text" :value="event.description" name="description" id="description" />
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
                <select name="status" id="status" v-model="event.statusName">
                    <option v-for="item in status" :key="item" :value="item">{{ item }}</option>
                </select>
            </div>

            <div class="information-event-form">
                <label for="employee">Employé impliqué</label>
                <select name="employee" id="employee" v-model="event.involvedEmployeeId">
                    <option v-for="item in employees" :key="item.id" :value="item.id">{{ getFullname(item)}}</option>
                </select>
            </div>

            <div class="information-event-form">
                <label for="witness">Temoin</label>
                <ul>
                    <li v-for="item in event.Témoins" :key="item">{{ item }} <span class="delete-witness" v-on:click="deleteWitness">Effacer</span></li>
                </ul>
                <input type="text" id="witness" name="witness" v-on:keyup.enter="addWitness">
            </div>

            <div class="information-event-form">
                <input type="submit" value="Modifier"/>
            </div>

        </div>
    </div>
</template>

<style>

    .information-event-container{
        width: 500px;
    }

    label{
        display: block;
    }

    .information-event-form-date-time{
        display: flex;
    }

    .witness ul{
        text-decoration: none;
    }


    
</style>

<script>
    import { mapState } from 'vuex' 
    export default{
        name: 'InformationEvent',
        props: {
            idEvent: Number,
        },
        computed: {
            event() {
                return this.$store.getters.getEvent(this.idEvent);
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

            },

            deleteWitness(){}
        }
    }

</script>