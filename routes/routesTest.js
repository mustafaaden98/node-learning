import express from 'express';
import {getTestApi, getTestCall, postProgrammingLanguage, updateProgrammingLangauge, deleteProgrammingLanguage} from '../controller/controllerTest.js'

const router = express.Router();


router.get('/details', getTestApi);
router.get('/:limit', getTestCall);
router.post('/', postProgrammingLanguage);
router.put('/update/:id', updateProgrammingLangauge);
router.delete('/delete/:id', deleteProgrammingLanguage)


export default router