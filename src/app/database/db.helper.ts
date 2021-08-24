import { createRxDatabase, addPouchPlugin, getRxStoragePouch, addRxPlugin } from 'rxdb';
import { RxDBBackupPlugin } from 'rxdb/plugins/backup';
addRxPlugin(RxDBBackupPlugin);
import * as leveldown from 'leveldown';
import * as pouchdbAdapterLeveldb from 'pouchdb-adapter-leveldb';
addPouchPlugin(pouchdbAdapterLeveldb);

import { DBNAME, DBPASSWORD } from './db.const';

const createDB = async () => {
    return await createRxDatabase({
        name: 'tcx-data/db/' + DBNAME,
        storage: getRxStoragePouch(leveldown),
        password: DBPASSWORD,
        multiInstance: true,
        eventReduce: false
    });
}

export const DB = createDB();