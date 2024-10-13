import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5,2,4);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 

const ambientLight = new THREE.AmbientLight(0xffffff, 2.5); 
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, .4);
pointLight.position.set(5, 4, 5);
scene.add(pointLight);
    
const furnitureMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.5 });
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc }); 

const floorGeometry = new THREE.BoxGeometry(10, 0.1, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.y = -0.05;
scene.add(floor);

const frontWallGeometry = new THREE.BoxGeometry(10, 5, 0.2); 
const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
frontWall.position.set(0, 2.5, -5); 
scene.add(frontWall);

const leftWallGeometry = new THREE.BoxGeometry(0.2, 5, 10);
const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWall.position.set(-5, 2.5, 0);
scene.add(leftWall);


const windowGeometry = new THREE.PlaneGeometry(4, 2);
const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
window1.position.set(-4.8, 2.5, 0);
window1.rotation.y = Math.PI / 2;
scene.add(window1);

const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
window2.position.set(0, 2.5, -4.8);
scene.add(window2);

const bedFrameGeometry = new THREE.BoxGeometry(4, 0.5, 3);
const bedMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const bedFrame = new THREE.Mesh(bedFrameGeometry, bedMaterial);
bedFrame.position.set(-2.6, 0.25, -3.1);
scene.add(bedFrame);

const mattressGeometry = new THREE.BoxGeometry(3.7, 0.2, 2.7);
const mattressMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
mattress.position.set(-2.6, 0.5, -3.1);
scene.add(mattress);

const blanketGeometry = new THREE.BoxGeometry(3, 0.3, 2.8);
const blanketMaterial = new THREE.MeshStandardMaterial({ color: 0xADD8E6 });
const blanket = new THREE.Mesh(blanketGeometry, blanketMaterial);
blanket.position.set(-2.2, 0.51, -3.1);
scene.add(blanket);

const pillowGeometry = new THREE.BoxGeometry(0.6, 0.2, 2.5);
const pillowMaterial = new THREE.MeshStandardMaterial({ color: 0xc8cfca });
const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow.position.set(-4.1, 0.65, -3.1);
scene.add(pillow);


const tableGeometry = new THREE.BoxGeometry(2, 0.1, 3);
const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const table = new THREE.Mesh(tableGeometry, tableMaterial);
table.position.set(-3.9, 1.2, 2);
scene.add(table);

const tableLegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.25);

for (let i = 0; i < 4; i++) {
    const leg = new THREE.Mesh(tableLegGeometry, furnitureMaterial);

    const xPos = -3.9 + (i % 2 ? 0.9 : -0.9);
    const zPos = 2 + (i < 2 ? 1.4 : -1.4);  

    leg.position.set(xPos, 0.53, zPos); 
    scene.add(leg);
}

const chairSeatGeometry = new THREE.BoxGeometry(1, 0.1, 1);
const chairSeat = new THREE.Mesh(chairSeatGeometry, furnitureMaterial);
chairSeat.position.set(-2.4, 0.7, 2);
scene.add(chairSeat);

const chairBackGeometry = new THREE.BoxGeometry(1, 1, 0.1); 
const a = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const chairBack = new THREE.Mesh(chairBackGeometry, a);
chairBack.position.set(-1.95, 1.21, 2);
scene.add(chairBack);

const chairLegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8);
for (let i = 0; i < 4; i++) {
    const leg = new THREE.Mesh(chairLegGeometry, furnitureMaterial);

    const xOffset = (i % 2 ? 0.4 : -0.4); 
    const zOffset = (i < 2 ? 0.4 : -0.4); 

    leg.position.set(-2.4 + xOffset, 0.3, 2 + zOffset); 
    scene.add(leg);
}

chairBack.rotation.y = Math.PI / 2; 



const monitorGeometry = new THREE.BoxGeometry(1.2, 1, 0.05);
const monitorMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
monitor.position.set(-4, 2, 2); 
monitor.rotation.y = Math.PI / 2; 
scene.add(monitor);

const monitorBackGeometry = new THREE.BoxGeometry(1.3, 1.1, 0.055);
const monitorBack = new THREE.Mesh(monitorBackGeometry, furnitureMaterial);
monitorBack.position.set(-4.009, 2, 2);
monitorBack.rotation.y = Math.PI / 2;
scene.add(monitorBack);

const standGeometry = new THREE.BoxGeometry(0.05, 0.3, 0.05);
const stand = new THREE.Mesh(standGeometry, furnitureMaterial);
stand.position.set(-4.05, 1.35, 2); 
scene.add(stand);

const deskGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.2);
const desk = new THREE.Mesh(deskGeometry, furnitureMaterial);
desk.position.set(-4.05, 1.25, 2);
desk.rotation.y = Math.PI / 2;
scene.add(desk);

const keyboardGeometry = new THREE.BoxGeometry(1, 0.05, 0.3);
const keyboardMaterial = new THREE.MeshStandardMaterial({ color: 0x666666 }); 
const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
keyboard.position.set(-3.5, 1.25, 2); 
keyboard.rotation.y = Math.PI / 2;
scene.add(keyboard);

const mouseGeometry = new THREE.BoxGeometry(0.15, 0.05, 0.1);
const mouseMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 }); 
const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
mouse.position.set(-3.5, 1.28, 1.3); 
scene.add(mouse);

const rugGeometry = new THREE.BoxGeometry(4, 0.01, 5);
const rugMaterial = new THREE.MeshStandardMaterial({ color: 0x8B0000 }); 
const rug = new THREE.Mesh(rugGeometry, rugMaterial);
rug.position.set(2, 0.01, 2); 
scene.add(rug);

const shelfGeometry = new THREE.BoxGeometry(2, 3.5, 0.7);
const shelfMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); 
const bookshelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
bookshelf.position.set(3.5, 1.74, -4.6); 
scene.add(bookshelf);

const bookGeometry = new THREE.BoxGeometry(1.7, 0.4, 0.2);
const bookMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 });
for (let i = 0; i < 5; i++) {
    const book = new THREE.Mesh(bookGeometry, bookMaterial);
    book.position.set(3.42, 1 + (i * 0.5) + 0.05, -4.3); 
    scene.add(book);
}

const potGeometry = new THREE.CylinderGeometry(0.3, 0.2, 0.3);
const potMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 }); 
const pot = new THREE.Mesh(potGeometry, potMaterial);
pot.position.set(-4, 0.2, 0); 
scene.add(pot);


const leavesGeometry = new THREE.ConeGeometry(0.25, 0.5, 4);
const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x228B22 });
for (let i = 0; i < 5; i++) {
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.set(-4, 0.4 + (i * 0.1) + 0.05, 0);
    leaves.rotation.y = Math.random() * Math.PI; 
    scene.add(leaves);
}


function getRandomColor() {
    return Math.floor(Math.random() * 16777215);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate(); 

