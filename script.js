
$(document).ready(() => {

    const icons = [
        {
            name: 'cat',
            display: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'crow',
            display: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'dog',
            display: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'dove',
            display: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'dragon',
            display: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'horse',
            display: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'hippo',
            display: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'fish',
            display: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
            color: 'orange'
        },
        {
            name: 'carrot',
            display: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'apple-alt',
            display: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'lemon',
            display: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'pepper-hot',
            display: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
            color: 'green'
        },
        {
            name: 'user-astronaut',
            display: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        },
        {
            name: 'user-graduate',
            display: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        },
        {
            name: 'user-ninja',
            display: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        },
        {
            name: 'user-secret',
            display: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
            color: 'blue'
        }
    ];
    const inconColors = ['#FCAB64', '#A9E190', '#CE7DA5'];
    

    const iconType = genIconType(icons);
    console.log(`Types dell'array principale:`, iconType);


    const coloredIcons = addColor(icons, iconType, inconColors);
    console.log('Array completo di colori', coloredIcons);


    displayIcons(coloredIcons);

    const select = $('#filter_opt');
    
    iconType.forEach(element => {
        select.append(
            `
            <option value="${element}">${element.toUpperCase()}</option>
            `
        );
    });

    select.change(function(){

        $('.container').html('');

        const optSelected = $(this).val();

        const filterIcons = coloredIcons.filter(element => element.type == optSelected);
        
        if (filterIcons.length == 0) {
            displayIcons(coloredIcons);
        } else {
            displayIcons(filterIcons);
        }

    });
    
});

function genIconType(arr) {
    const resArr = [];
    arr.forEach(element => {
        
        if (!resArr.includes(element.type)) {
            resArr.push(element.type);
        }
    });

    return resArr;
};

function addColor(gen, filArr, col) {

    const colArr = gen.map(element => {
        const typeIndex = filArr.indexOf(element.type);
        return {
            ...element, 
            color : col[typeIndex]
        };
    });

    return colArr;
};

function displayIcons(arr) {

    arr.forEach(element => {

        const {name, display, family, prefix, color} = element;

        $('.container').append(
            `
            <div class="icon_box">
                    <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                    <p>${display}</p>
                </div>
            `
        );

    });

};