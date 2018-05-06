export const initializeDatabase = db => {
	console.log('INIT DB');
	return new Promise((resolve, reject) => {
		const queries = [
			`CREATE TABLE IF NOT EXISTS preference (
				key VARCHAR(30) PRIMARY KEY NOT NULL,
				value VARCHAR(30)
			)`
		];
		db.transaction(tx => {
			queries.map(q => {
				try {
					tx.executeSql(q, [], () => {
						resolve();
					}, (tx, error) => {
						console.log('error', error);
						reject(error);
					});
				} catch(e) {
					console.error(e);
					reject(e);
				}
			});
		});
	});
};

export const get = (db, key) => {
    return new Promise(resolve => {
        db.transaction(tx => {
            tx.executeSql('SELECT value FROM preference WHERE key = ?', [key], (tx, results) => {
                const data = results.rows.item(0);
                resolve(data ? data.value : null);
            }, (er) => {
                resolve(null)
            });
        });
    });
};

export const set = (db, key, value) => {
    return new Promise(resolve => {
        db.transaction(tx => {
            tx.executeSql('INSERT OR IGNORE INTO preference (key,value) VALUES(?,?)', [key,value]);
        });
        resolve(value);
    });
};

export const replace = (db, key, value) => {
    return new Promise(resolve => {
        db.transaction(tx => {
            tx.executeSql('UPDATE preference SET value = ? WHERE key = ?', [key,value]);
        });
        resolve(value);
    });
};

export const remove = (db, key) => {
    return new Promise(resolve => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM preference WHERE key = ?', [key]);
        });
        resolve(val);
    });
};
