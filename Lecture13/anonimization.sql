-- Anonymize Children
UPDATE Children
SET first_name = 'Child',
    last_name = 'Anonymous';

-- Anonymize Parents
UPDATE Parents
SET first_name = CONCAT('Parent', parent_id),
    last_name = CONCAT('Anon', parent_id);

-- Anonymize Institutions
UPDATE Institutions
SET institution_name = CONCAT('Institution', institution_id);

-- Randomize Tuition Fees (1000 to 2000)
UPDATE Parents
SET tuition_fee = ROUND(RAND() * 1000 + 1000, 2);
