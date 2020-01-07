function init() {
    // Scenes
    let sceneCollection = {
        intro: {
            sceneDialog: `We have patients here who have lost a lot of blood. Grab the bag that contains the correct blood type for each patient and place it on the hanger.
                    <br />
                    <br />Save as many patients as you can!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneCta: `I'm ready!`,
            sceneNextAction: 'start-game',
        },
        correct: {
            sceneDialog: `Awesome work! But hurry, let's get to the next patient!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneCta: `Next!`,
            sceneNextAction: 'next-patient',
        },
        'ran-out-of-blood': {
            sceneDialog: `Looks like you've run out of that blood type! We might have to make do. Do your best!`,
            sceneExpression:
                'assets/game-screen-character-nurse-4-disappointed-continue.svg',
            sceneCta: `I'll figure it out`,
            sceneNextAction: 'close-ran-out-of-blood-dialog',
        },
        incorrect: {
            sceneDialog: `Yikes! We can learn from our mistakes. Try again!`,
            sceneExpression:
                'assets/game-screen-character-nurse-4-disappointed-continue.svg',
            sceneCta: `Next!`,
            sceneNextAction: 'next-patient',
        },
        'ending-correct-high-score': {
            sceneDialog: `Excellent job. That's it for now! We have no other patients that need our attention. Good work!`,
            sceneExpression: 'assets/game-screen-character-nurse-2-content.svg',
            sceneCta: `I want to play again`,
            sceneNextAction: 'restart-game',
        },
        'ending-correct-low-score': {
            sceneDialog: `Excellent job. That's it for now! We have lost quite a few patients. Play again and try to save more lives.`,
            sceneExpression: 'assets/game-screen-character-nurse-2-content.svg',
            sceneCta: `I want to play again`,
            sceneNextAction: 'restart-game',
        },
        'ending-incorrect-high-score': {
            sceneDialog: `Yikes! Managing the inventory can be tough. That's it for now! We have no other patients that need our immediate attention. Great job!`,
            sceneExpression: 'assets/game-screen-character-nurse-2-content.svg',
            sceneCta: `I want to play again`,
            sceneNextAction: 'restart-game',
        },
        'ending-incorrect-low-score': {
            sceneDialog: `Yikes! Managing the inventory can be tough. That's it for now! We have lost quite a few patients. Play again and try to save more lives.`,
            sceneExpression:
                'assets/game-screen-character-nurse-3-disappointed.svg',
            sceneCta: `I want to play again`,
            sceneNextAction: 'restart-game',
        },
        help: {
            sceneDialog: `Select the bag that contains the correct blood type for each patient and place the bag in the area indicated by the dashed lines.
            <br />
            <br />Save as many patients as you can!
            <br />
            <br />Are you stuck ? <a onclick="document.location.reload(true);" href="#" title="Restart the game">Restart the game.</a>`,
            sceneExpression: 'assets/game-screen-character-nurse-2-content.svg',
            sceneCta: `OK, I got it!`,
            sceneNextAction: 'close-help-dialog',
        },
    };

    // Patient Scenes
    let patientSceneCollection = [
        {
            bloodQuantityRequired: 2,
            bloodTypeRequired: 'B',
            sceneDialog: `We have a <strong>type B patient</strong> who has lost a lot of blood. We need <strong>2 units of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 2,
            bloodTypeRequired: 'A',
            sceneDialog: `We have a <strong>type A patient</strong> who has lost a lot of blood. We need <strong>2 units of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 2,
            bloodTypeRequired: 'AB',
            sceneDialog: `We have a <strong>type AB patient</strong> who has lost a lot of blood. We need <strong>2 units of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 1,
            bloodTypeRequired: 'B',
            sceneDialog: `We have a <strong>type B patient</strong> who has lost a lot of blood. We need <strong>1 unit of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 1,
            bloodTypeRequired: 'A',
            sceneDialog: `We have a <strong>type A patient</strong> who has lost a lot of blood. We need <strong>1 unit of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 1,
            bloodTypeRequired: 'AB',
            sceneDialog: `We have a <strong>type AB patient</strong> who has lost a lot of blood. We need <strong>1 unit</strong> of blood right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 3,
            bloodTypeRequired: 'AB',
            sceneDialog: `We have a <strong>type AB patient</strong> who has lost a lot of blood. We need <strong>3 units of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 3,
            bloodTypeRequired: 'A',
            sceneDialog: `We have a <strong>type A patient</strong> who has lost a lot of blood. We need <strong>3 units of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 3,
            bloodTypeRequired: 'B',
            sceneDialog: `We have a <strong>type B patient</strong> who has lost a lot of blood. We need <strong>3 units of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 1,
            bloodTypeRequired: 'AB',
            sceneDialog: `We have a <strong>type AB patient</strong> who has lost a lot of blood. We need <strong>1 unit of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 1,
            bloodTypeRequired: 'A',
            sceneDialog: `We have a <strong>type A patient</strong> who has lost a lot of blood. We need <strong>1 unit of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 1,
            bloodTypeRequired: 'B',
            sceneDialog: `We have a <strong>type B patient</strong> who has lost a lot of blood. We need <strong>1 unit of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 2,
            bloodTypeRequired: 'O',
            sceneDialog: `We need <strong>2 units of blood</strong> right away! <strong>The patient is Type O</strong>`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 3,
            bloodTypeRequired: 'O',
            sceneDialog: `We have a patient and she needs blood desperately! There’s <strong>no time to check her blood type</strong>, so get us <strong>3 units</strong> stat!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 2,
            bloodTypeRequired: 'O',
            sceneDialog: `We have a <strong>type O patient</strong> who has lost a lot of blood. We need <strong>2 units of blood</strong> right away!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
        {
            bloodQuantityRequired: 2,
            bloodTypeRequired: 'O',
            sceneDialog: `We have a patient and he has lost a lot of blood. <strong>We don’t know his blood type</strong>. Get us <strong>2 units of blood</strong> that we can use!`,
            sceneCta: `OK!`,
            sceneExpression: 'assets/game-screen-character-nurse-1-normal.svg',
            sceneNextAction: 'close-dialog',
        },
    ];

    // Patients
    let listOfPatients = document.querySelectorAll(
            '.patient-character-container'
        ),
        patientNumberElement = document.querySelector('[data-patient-counter]')
            .children[0],
        savedNumberElement = document.querySelector('[data-saved-counter]')
            .children[0];

    // Set Score and Patient Number
    let bloodTransfusionAttempts = 0,
        currentPatientBloodType,
        currentPatientBloodQuantityRequired,
        patientNumberValue = 0,
        patientsSaved = 0;

    // Blood Bags
    let bloodBagType = {},
        bloodBagQuantities = {
            A: 8,
            B: 8,
            AB: 8,
            O: 5,
        };

    let hangingBloodBagValue = 0;

    function hospitalProcedure(event, bloodBag) {
        // Load to validator object
        bloodBagType[bloodBag.dataset.bloodBagType]++;

        // Remove from inventory
        bloodBagQuantities[bloodBag.dataset.bloodBagType]--;

        // Update UI elements
        bloodBag.children[2].children[0].innerHTML =
            bloodBagQuantities[bloodBag.dataset.bloodBagType];

        // Begin operation
        bloodTransfusion();

        if (
            bloodTransfusionAttempts < currentPatientBloodQuantityRequired &&
            bloodBagQuantities[bloodBag.dataset.bloodBagType] === 0
        ) {
            bloodBag.classList.add('disable');
            sceneLoader(sceneCollection['ran-out-of-blood']);
            document
                .querySelector('[data-next-action]')
                .classList.remove('hide');
        } else if (bloodBagQuantities[bloodBag.dataset.bloodBagType] === 0) {
            bloodBag.classList.add('disable');
        }

        // Add to hangar
        dropZoneContainer.classList.replace('unloaded', 'loaded');

        // Hang the Blood Bag
        let hangingBloodBag = document.querySelector(
            '[data-blood-type-on-hangar]'
        );
        hangingBloodBag.innerHTML = bloodBag.dataset.bloodBagType;

        let hangingBloodBagCounter = document.querySelector(
            '[data-blood-qty-on-hangar]'
        );

        hangingBloodBagValue++;
        hangingBloodBagCounter.innerHTML = hangingBloodBagValue;
    }

    let dragged;

    document.querySelectorAll('[data-blood-bag-type]').forEach(bloodBag => {
        bloodBag.children[2].children[0].innerHTML =
            bloodBagQuantities[bloodBag.dataset.bloodBagType];

        bloodBag.addEventListener(
            'dragstart',
            event => {
                event.dataTransfer.setData('text/plain', null); // This is so that the image shows when its being dragged! SO COOL!
                dragged = event.target;
                event.target.style.opacity = 0.5;
            },
            false
        );

        bloodBag.addEventListener('drag', () => {}, false);

        bloodBag.addEventListener(
            'dragend',
            event => {
                event.target.style.opacity = '';
            },
            false
        );

        bloodBag.addEventListener('click', event => {
            hospitalProcedure(event, bloodBag);
        });
    });

    let dropZoneContainer = document.querySelector(
        '.blood-bag-drop-zone-container'
    );

    dropZoneContainer.addEventListener(
        'dragover',
        event => {
            event.preventDefault();
        },
        false
    );

    dropZoneContainer.addEventListener(
        'dragenter',
        event => {
            if (
                event.target.classList.contains('blood-bag-drop-zone-container')
            ) {
                event.target.style.opacity = 0.5;
            }
        },
        false
    );

    dropZoneContainer.addEventListener(
        'dragleave',
        event => {
            if (
                event.target.classList.contains('blood-bag-drop-zone-container')
            ) {
                event.target.style.opacity = '';
            }
        },
        false
    );

    dropZoneContainer.addEventListener(
        'drop',
        event => {
            event.preventDefault();

            if (
                event.target.classList.contains('blood-bag-drop-zone-container')
            ) {
                event.target.style.opacity = '';
                hospitalProcedure(event, dragged);
            }
        },
        false
    );

    // Scene Helper
    var dialogContainer = document.querySelector('.nurse-dialog-container'),
        dialogText = dialogContainer.children[0].children[0],
        dialogButtonText = dialogContainer.children[1], // .innerHTML
        dialogButtonAction = dialogContainer.children[1].dataset,
        dialogExpression = document.querySelector('.nurse-character-container')
            .children[0].attributes.src,
        storedScene; // .value;

    function hideDialog() {
        document
            .querySelector('.blood-bag-container')
            .classList.remove('disable');

        dialogExpression.value = sceneCollection['help'].sceneExpression;

        // Close dialog
        document
            .querySelector('[data-next-action]')
            .removeEventListener('click', hideDialog);

        // Hide Button
        document.querySelector('[data-next-action]').classList.add('hide');

        // If help dialog, close it entirely and reset the scene dialog
        if (document.querySelector('[data-next-action="close-help-dialog"')) {
            sceneLoader(storedScene);

            document
                .querySelector('.blood-bag-container')
                .classList.remove('disable');
        }

        // If ran out of blood dialog, close it entirely and reset the scene dialog
        if (
            document.querySelector(
                '[data-next-action="close-ran-out-of-blood-dialog"'
            )
        ) {
            sceneLoader(storedScene);

            document
                .querySelector('.blood-bag-container')
                .classList.remove('disable');
        }
    }

    function hideTheDeadBody() {
        listOfPatients[patientNumberValue - 1].classList.remove('show-patient');
    }

    // Reset Scene
    function resetTheScene() {
        // Reset Blood Bag Type Object
        bloodBagType = {
            A: 0,
            B: 0,
            AB: 0,
            O: 0,
        };

        bloodTransfusionAttempts = 0;
        hangingBloodBagValue = 0;
    }

    // Intro Scene
    function sceneLoader(scene) {
        // Disable blood bags
        document.querySelector('.blood-bag-container').classList.add('disable');

        // Show dialog
        dialogContainer.classList.remove('hide');

        dialogText.innerHTML = scene.sceneDialog;
        dialogButtonText.innerHTML = scene.sceneCta;
        dialogButtonAction.nextAction = scene.sceneNextAction;
        dialogExpression.value = scene.sceneExpression;

        if (document.querySelector('[data-next-action="restart-game"]')) {
            document
                .querySelector('[data-next-action="restart-game"]')
                .addEventListener('click', resetTheGame);
        } else if (
            document.querySelector('[data-next-action="close-dialog"]')
        ) {
            document
                .querySelector('[data-next-action="close-dialog"]')
                .addEventListener('click', hideDialog);
        } else if (
            document.querySelector('[data-next-action="close-help-dialog"]')
        ) {
            document
                .querySelector('[data-next-action="close-help-dialog"]')
                .addEventListener('click', hideDialog);
        } else if (
            document.querySelector(
                '[data-next-action="close-ran-out-of-blood-dialog"]'
            )
        ) {
            document
                .querySelector(
                    '[data-next-action="close-ran-out-of-blood-dialog"]'
                )
                .addEventListener('click', hideDialog);
        } else {
            document
                .querySelector('[data-next-action]')
                .addEventListener('click', callPatient);
        }
    }

    let bloodTypeOHappening = 0;
    let specialOScenes = 4;

    // Call Patient
    function callPatient() {
        let seeminglyRandomScenario;

        if (patientNumberValue > 5 && patientNumberValue < 10) {
            if (bloodTypeOHappening === 0 || bloodTypeOHappening === 2) {
                seeminglyRandomScenario = Math.floor(
                    Math.random() *
                        (patientSceneCollection.length -
                            (patientSceneCollection.length - specialOScenes)) +
                        (patientSceneCollection.length - specialOScenes)
                );

                bloodTypeOHappening++;
                specialOScenes--;
            } else {
                seeminglyRandomScenario = Math.floor(
                    Math.random() *
                        (patientSceneCollection.length - specialOScenes - 0) +
                        0
                );

                bloodTypeOHappening++;
            }
        } else {
            seeminglyRandomScenario = Math.floor(
                Math.random() *
                    (patientSceneCollection.length - specialOScenes - 0) +
                    0
            );
        }

        // Reset the scene
        resetTheScene();

        if (patientNumberValue > 0) {
            hideTheDeadBody();
        }

        storedScene = patientSceneCollection[seeminglyRandomScenario];

        setPatientScene(patientSceneCollection[seeminglyRandomScenario]);

        // Array reduction
        if (seeminglyRandomScenario > -1) {
            patientSceneCollection.splice(seeminglyRandomScenario, 1);
        }
    }

    // Set the Patient Scene
    function setPatientScene(patientScene) {
        // Remove from hangar
        dropZoneContainer.classList.replace('loaded', 'unloaded');

        // Disable previous CTA
        document
            .querySelector('[data-next-action]')
            .removeEventListener('click', callPatient);

        // Set the Scene
        dialogText.innerHTML = patientScene.sceneDialog;
        dialogButtonText.innerHTML = patientScene.sceneCta;
        dialogButtonAction.nextAction = patientScene.sceneNextAction;
        dialogExpression.value = patientScene.sceneExpression;

        // Close dialog
        if (document.querySelector('[data-next-action="close-dialog"]')) {
            hideDialog();
        }

        // Bring in the next test subject
        listOfPatients[patientNumberValue].classList.add('show-patient');

        // Acquire patient records
        currentPatientBloodType = patientScene.bloodTypeRequired;
        currentPatientBloodQuantityRequired =
            patientScene.bloodQuantityRequired;

        patientNumberValue++;
        patientNumberElement.innerHTML = patientNumberValue;
    }

    // Begin Operation
    function bloodTransfusion() {
        bloodTransfusionAttempts++;
        let matchBlood;

        if (currentPatientBloodType === 'O') {
            matchBlood =
                bloodBagType['O'] === currentPatientBloodQuantityRequired;
        } else if (
            bloodBagType[currentPatientBloodType] ===
            currentPatientBloodQuantityRequired
        ) {
            matchBlood = true;
        } else if (
            currentPatientBloodType === 'A' ||
            currentPatientBloodType === 'B' ||
            currentPatientBloodType === 'AB'
        ) {
            if (
                bloodBagType['O'] + bloodBagType[currentPatientBloodType] ===
                currentPatientBloodQuantityRequired
            ) {
                matchBlood = true;
            } else if (currentPatientBloodType === 'AB') {
                matchBlood =
                    bloodBagType['O'] +
                        bloodBagType['A'] +
                        bloodBagType['B'] +
                        bloodBagType[currentPatientBloodType] ===
                    currentPatientBloodQuantityRequired;
            }
        }

        if (matchBlood) {
            // Correct
            patientsSaved++;
            savedNumberElement.innerHTML = patientsSaved;

            if (patientNumberValue === 10) {
                if (patientsSaved > 7) {
                    sceneLoader(sceneCollection['ending-correct-high-score']);
                } else {
                    sceneLoader(sceneCollection['ending-correct-low-score']);
                }

                document
                    .querySelector('[data-next-action]')
                    .classList.remove('hide');
            } else {
                sceneLoader(sceneCollection['correct']);

                document
                    .querySelector('[data-next-action]')
                    .classList.remove('hide');
            }
        } else if (
            bloodTransfusionAttempts === currentPatientBloodQuantityRequired
        ) {
            // Incorrect
            if (patientNumberValue === 10) {
                if (patientsSaved > 7) {
                    sceneLoader(sceneCollection['ending-incorrect-high-score']);
                } else {
                    sceneLoader(sceneCollection['ending-incorrect-low-score']);
                }

                document
                    .querySelector('[data-next-action]')
                    .classList.remove('hide');
            } else {
                sceneLoader(sceneCollection['incorrect']);

                document
                    .querySelector('[data-next-action]')
                    .classList.remove('hide');
            }
        }
    }

    function resetTheGame() {
        document.location.reload(true);
    }

    // Start
    document.querySelector('#btnStartGame').addEventListener('click', () => {
        document.querySelector('#introScreen').classList.add('hide');
        document.querySelector('#gameScreen').classList.remove('hide');
    });

    // Help
    document
        .querySelector('[data-purpose="help"]')
        .addEventListener('click', () => {
            sceneLoader(sceneCollection['help']);

            document
                .querySelector('[data-next-action]')
                .classList.remove('hide');
        });

    // Restart
    document
        .querySelector('[data-purpose="reset"]')
        .addEventListener('click', resetTheGame);

    sceneLoader(sceneCollection['intro']);
}

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        init();
    }
});
