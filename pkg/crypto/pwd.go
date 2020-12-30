package crypto

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type PwdCryptor struct {
	cost int
}

func NewPwdCryptor(cost int) *PwdCryptor {
	return &PwdCryptor{cost: cost}
}

func (c *PwdCryptor) HashAndSalt(pwd []byte) ([]byte, error) {
	hash, err := bcrypt.GenerateFromPassword(pwd, c.cost)
	if err != nil {
		return nil, fmt.Errorf("failed generate hash: %w", err)
	}

	return hash, nil
}

func (c *PwdCryptor) CompareHash(hash, pwd []byte) bool {
	return bcrypt.CompareHashAndPassword(hash, pwd) == nil
}
