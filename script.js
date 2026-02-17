
// ПАРОЛИ ДЛЯ ВСЕХ СТРАНИЦ (МЕНЯЙТЕ ЗДЕСЬ)
const PASSWORDS = {
  // ПАРОЛЬ ДЛЯ КАЖДОЙ ФРАКЦИИ
  factions: {
    "01":"x7A9q","02":"K92Lm","03":"Qw8Er","04":"N5tYp","05":"L0mBn",
    "06":"R4vCx","07":"T7uIo","08":"P3aSd","09":"H8jKl","10":"M2nQw"
  },
  // ПАРОЛЬ ДЛЯ КАЖДОГО СУЩЕСТВА
  creatures: {
    "HA-0019":"Zx81Q","HA-0020":"Jk22P","HA-0021":"Lm44N","HA-0022":"As77D","HA-0023":"Qp90W",
    "HA-0024":"Ty51R","HA-0025":"Ui62E","HA-0026":"Op73T","HA-0027":"Gh84Y","HA-0028":"Bn95U",
    "HA-0029":"Cv16I","HA-0030":"Xz27O","HA-0031":"Pl38A","HA-0032":"Ko49S","HA-0033":"Mi50D",
    "HA-0034":"Nu61F","HA-0035":"By72G","HA-0036":"Vt83H","HA-0037":"Cr94J","HA-0038":"Dx05K",
    "HA-0039":"Ez16L","HA-0040":"Fa27Z","HA-0041":"Gb38X","HA-0042":"Hc49C","HA-0043":"Id50V",
    "HA-0044":"Je61B","HA-0045":"Kf72N","HA-0046":"Lg83M","HA-0047":"Mh94Q","HA-0048":"Ni05W",
    "HA-0049":"Oj16E","HA-0050":"Pk27R","HA-0051":"Ql38T","HA-0052":"Rm49Y","HA-0053":"Sn50U",
    "HA-0054":"To61I","HA-0055":"Up72O","HA-0056":"Vq83P","HA-0057":"Wr94A","HA-0058":"Xs05S"
  },
  // ПАРОЛЬ ДЛЯ КАЖДОЙ ЗАПИСИ
  records: {
    "01":"R9Lp2","02":"A1sD3","03":"F4gH5","04":"J6kL7","05":"Z8xC9","06":"V0bN1","07":"M2qW3","08":"E4rT5","09":"Y6uI7","10":"O8pA9",
    "11":"S1dF2","12":"G3hJ4","13":"K5lZ6","14":"X7cV8","15":"B9nM0","16":"Q1wE2","17":"R3tY4","18":"U5iO6","19":"P7aS8","20":"D9fG0"
  },
  // ПАРОЛЬ ДЛЯ КАРТЫ МИРА
  map:"MAP-77"
};

function goBack(){ if(history.length>1){history.back();} else {location.href='../index.html';} }
function enlarge(src,alt){ const p=document.getElementById('preview'); if(p){ p.innerHTML=`<img src="${src}" alt="${alt}">`; } }
function checkAndOpen(type,key,url){
  const pass = prompt(`Введите пароль для ${key}`);
  if(pass===null) return;
  let valid=false;
  if(type==='map'){ valid = pass===PASSWORDS.map; if(valid){ sessionStorage.setItem('access_map','ok'); } }
  else { valid = PASSWORDS[type] && PASSWORDS[type][key]===pass; if(valid){ sessionStorage.setItem(`access_${type}_${key}`,'ok'); } }
  if(valid){ location.href=url; } else { alert('Неверный пароль'); }
}
function requireAccess(type,key){
  const token = type==='map' ? sessionStorage.getItem('access_map') : sessionStorage.getItem(`access_${type}_${key}`);
  if(token!=='ok'){ alert('Сначала введите пароль на странице списка.'); location.href='../index.html'; }
}
