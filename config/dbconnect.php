<?php
class DbManager
{
    public $dbh;
    public function connect()
    {
        $host    = "localhost";
        $dbname  = "";
        $charset = "utf8";
        $dsn     = "mysql: host=$host; dbname=$dbname; charset=$chrset";
        $user    = 'root';
        $pass    = 'root';
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            $this->dbh = new PDO($dsn, $user, $pass, $opttions);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }
}
