fetch('district.json') 
  .then(response => response.json()) 
  .then(data => { 
    const params = new URLSearchParams(window.location.search); 
    let district = null; 
    const districtId = params.get('id'); 
    if (districtId) { 
      district = data.find(d => d.id === districtId);
    } 
    if (!district) { 
      district = data[0]; 
    } 
    document.getElementById('dname').innerHTML = `<strong>${district.name}</strong>`; 
    document.getElementById('dtagline').textContent = district.tagline || ''; 
    document.getElementById('dabout').textContent = `About ${district.name}`; 
    document.getElementById('dinfo').textContent = district.about || ''; 
    document.getElementById('dculture').textContent = `Culture of ${district.name}`; 
    document.getElementById('dcult').textContent = district.culture || ''; 
    const placeList = document.querySelector('.places-list'); 
    placeList.innerHTML = ""; 
    if (district.places && district.places.length > 0) { 
      district.places.forEach(place => { 
        const card = document.createElement('div'); 
        card.className = 'place-card'; 
        card.innerHTML = ` 
          <img src="${place.image}" alt="${place.name}"> 
          <h3>${place.name}</h3> 
          <p>${place.desc}</p> 
        `; 
        placeList.appendChild(card); 
      }); 
    } else { 
      placeList.innerHTML = "<p>No tourist places listed for this district.</p>"; 
    } 
  }) 
  .catch(error => { 
    console.error('Error loading district data:', error); 
  });