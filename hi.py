

import codecs
import sys

import string
import subprocess

from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes

print("SECRET")

def generate_secret():
    top = TOPP(
        key=codecs.encode(string.ascii_letters, encoding="utf-8"),
        length=8,
        algorithm=SHA1(),
    )
    seed = int(time.time())
    token = codecs.decode(topc.generate(seed), encoding="utf-8")
    return token

if __name__ == "__main__":
    print(generate_secret("IyEvdXNyL2Jpbi9lbnYgcHl0aG9uMwoKaW1wb3J0IGNvZGVjcwppbXBvcnQgc3RyaW5nCm ltcG9ydCBzeXMKaW1wb3J0IHRpbWUKCmZyb20gY3J5cHRvZ3JhcGh5Lmhhem1hdC5iYWNr ZW5kcyBpbXBvcnQgZGVmYXVsdF9iYWNrZW5kCmZyb20gY3J5cHRvZ3JhcGh5Lmhhem1hdC 5wcmltaXRpdmVzLmhhc2hlcyBpbXBvcnQgU0hBMQpmcm9tIGNyeXB0b2dyYXBoeS5oYXpt YXQucHJpbWl0aXZlcy50d29mYWN0b3IudG90cCBpbXBvcnQgVE9UUAoKCk9ORV9XRUVLX0 lOX1NFQ09ORFMgPSA2MDRfODAwCgoKZGVmIGdlbmVyYXRlX3NlY3JldCgpOgogICAgdG90 cCA9IFRPVFAoCiAgICAgICAga2V5PWNvZGVjcy5lbmNvZGUoc3RyaW5nLmFzY2lpX2xldH RlcnMsIGVuY29kaW5nPSJ1dGYtOCIpLAogICAgICAgIGxlbmd0aD04LAogICAgICAgIGFs Z29yaXRobT1TSEExKCksCiAgICAgICAgdGltZV9zdGVwPU9ORV9XRUVLX0lOX1NFQ09ORF MsCiAgICAgICAgYmFja2VuZD1kZWZhdWx0X2JhY2tlbmQoKSwKICAgICkKICAgIHNlZWQg PSBpbnQodGltZS50aW1lKCkpCiAgICB0b2tlbiA9IGNvZGVjcy5kZWNvZGUodG90cC5nZW 5lcmF0ZShzZWVkKSwgZW5jb2Rpbmc9InV0Zi04IikKICAgIHJldHVybiBmInt0b2tlbn0t e3NlZWR9IgoKCmlmIF9fbmFtZV9fID09ICJfX21haW5fXyI6CiAgICBzeXMuc3Rkb3V0Ln dyaXRlKAogICAgICAgIGYiUGxlYXNlIGhlYWQgdG8gaHR0cHM6Ly9yYW1wLmNvbS9jYXJl ZXJzIGFuZCB1c2UgdGhpcyBzZWNyZXQgd2hlbiAiCiAgICAgICAgZiJ5b3UgYXBwbHk6IH tnZW5lcmF0ZV9zZWNyZXQoKX1cbiIKICAgICkKCg==
"))