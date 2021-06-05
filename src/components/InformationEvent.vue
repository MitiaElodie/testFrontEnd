<template>
    <div class="information-event-container">
        <div class="event-title">
            <h2>Accident avec</h2>
            <p>Cree le date a heure par personne</p>
        </div>
        <div class="event-element">
            <div class="">
                <label for="title">Titre</label>
                <input type="text" value="Accident avec personne" id="title" name="title" />
            </div>
            
            <div class="">
                <label for="description">Description</label>
                <textarea type="text" name="description" id="description" />
            </div>

            <div class="">
                <label for="date">Date</label>
                <input type="date" id="date" name="date" />
            </div>

            <div class="">
                <label for="time">Heure</label>
                <input type="time" id="time" name="time" />
            </div>

            <div class="">
                <label for="status">Nom du statut</label>
                <select name="status" id="status">
                    <option value="value">Value</option>
                </select>
            </div>

            <div class="">
                <label for="employe">Employé impliqué</label>
                <select name="employe" id="employee">
                    <option value="value">Value</option>
                </select>
            </div>
        </div>
    </div>
</template>
