CREATE TABLE Users(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	UserID UNIQUEIDENTIFIER,
	FirstName NVARCHAR(50),
	LastName NVARCHAR(50),
	EmailAddress NVARCHAR(50),
);

CREATE TABLE TierLists(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	TierListID UNIQUEIDENTIFIER,
	UserID UNIQUEIDENTIFIER,
);

CREATE TABLE TierListRows(
	ID INT IDENTITY(1,1) PRIMARY KEY,
	RowID UNIQUEIDENTIFIER,
	TierListID UNIQUEIDENTIFIER,
	RowNumber SMALLINT,
	CharacterList NVARCHAR(250),
);
--Set Up User
INSERT INTO USERS(UserID, FirstName,LastName,EmailAddress)
VALUES(NEWID(), 'Noah', 'Kaplan', 'noahfkaplan1@gmail.com')

--Set Up TierLists
INSERT INTO TierLists(TierListID)
VALUES(NEWID())

UPDATE TierLists
SET TierLists.UserID = U.UserID
FROM TierLists TL, Users U
WHERE U.FirstName = 'Noah' AND TL.ID = 1

--Set Up TierListRows
INSERT INTO TierListRows(RowID, RowNumber, CharacterList)
VALUES(NEWID(),1,'Fox,Falco,Puff,Marth') 

UPDATE TierListRows
SET TierListRows.TierListID = TL.TierListID
FROM TierLists TL, TierListRows TLR
WHERE TL.ID = 1 AND TLR.ID = 1